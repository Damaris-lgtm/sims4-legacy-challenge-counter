import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { DataSave, SimData } from "../shared/model/generation.model";
import { Achievement, AchievementType, Aspiration, Career, Collection, Death, GameAchievement, Medal, MedalScore, OccultType, Preference, Punishment, Skill, Trait } from "../shared/model/achievement.model";
import { TRAITS } from "../shared/model/traits.data";
import { computed } from "@angular/core";
import { SKILLS } from "../shared/model/skills.data";
import { ASPIRATIONS } from "../shared/model/aspirations.data";
import { CAREER } from "../shared/model/career.data";
import { MEDALS } from "../shared/model/medals.data";
import { GAME_ACHIEVEMENTS } from "../shared/model/game-achievements.data";
import { DEATHS } from "../shared/model/death.data";
import { PUNISHMENTS } from "../shared/model/punishments.data";
import { COLLECTIONS } from "../shared/model/collections.data";
import { PREFERENCES } from "../shared/model/preferences.data";
import { OCCULTS } from "../shared/model/occult.data";

export const simSaveStorageKey = 'simsave';

type DataStoreType = {
    current: string | undefined;
    saves: Record<string, DataSave | undefined>;
}

const initialData: DataStoreType = {
    current: undefined,
    saves: {}
};

export const DataStore = signalStore(
    { providedIn: 'root' },
    withState<DataStoreType>(initialData),
    withMethods((store) => ({
        loadData: () => {
            const storage = localStorage.getItem(simSaveStorageKey);
            if (storage) {
                const data = JSON.parse(storage) as DataSave[];
                const saves: Record<string, DataSave> = {};
                data.forEach(item => {
                    saves[item.id] = item;
                });
                const current: string | undefined = data.length === 1 ? data[0].id : store.current();
                patchState(store, { saves, current });
            } else {
                patchState(store, { saves: {}, current: undefined });
            }
        },
        addNewSave(_data?: DataSave) {
            const data = _data || {
                id: crypto.randomUUID(),
                    generations: [],
                    sims: [],
                    customData: []
                };
    
            if (store.saves()[data.id]) {
                console.warn('Save with id ', data.id, ' already exists.');
                return;
            }
            this.updateData(data);
        },
        changeCurrent(current: string) {
            if (!store.saves()[current]) {
                console.warn('No save found with id ', current);
                return;
            };
            patchState(store, { current });
        },
        updateData(data: DataSave) {
            patchState(store, { saves: { ...store.saves(), [data.id]: data }, current: data.id });
            this.updateLocalStorage();
        },
        deleteSave(id: string) {
            const current = store.current() === id ? undefined : store.current();
            patchState(store, { saves: { ...store.saves(), [id]: undefined }, current });
        },

        updateLocalStorage() {
            localStorage.setItem(simSaveStorageKey, JSON.stringify(Object.values(store.saves())));
        },

        updateSim(sim: SimData) {
            if (!store.current()) {
                alert('No save selected. Please select or create a save first.');
            }
            const sims = store.saves()[store.current()!]?.sims || [];
            const existingIndex = sims.findIndex(s => s.id === sim.id);
            if (existingIndex !== -1) {
                sims[existingIndex] = sim;
            } else {
                sims.push(sim);
            }
            patchState(store, {
                saves: {
                    ...store.saves(),
                    [store.current()!]: {
                        ...store.saves()[store.current()!]!,
                        sims
                    }
                }
            });
            this.updateLocalStorage();
        },
        deleteSim(sim: SimData) {
            let generations = getSave(store.current(), store.saves())?.generations || [];
            const founderGeneration = generations.find(generation => generation.founder === sim.id);
            if ((founderGeneration?.children.length ?? 0) > 0 || (founderGeneration?.spouse.length ?? 0) > 0 || founderGeneration?.heir) {
                alert('Cannot delete sim that is a founder of a generation with other sims. Please remove other sims from the generation first.');
                return;
            }
            if (founderGeneration) {
                // Remove the founder generation
                generations = generations.filter(g => g !== founderGeneration);
                generations.filter(g => g.heir === sim.id).forEach(g => {
                    g.heir = undefined; // Clear heir if it was the sim being deleted    
                });
            }

            generations.forEach(generation => {
                generation.spouse = generation.spouse.filter(s => s !== sim.id);
                generation.children = generation.children.filter(c => c !== sim.id);
            });
            const sims = store.saves()[store.current()!]?.sims.filter(s => s.id !== sim.id) || [];
            patchState(store, {
                saves: {
                    ...store.saves(),
                    [store.current()!]: {
                        ...store.saves()[store.current()!]!,
                        sims
                    }
                }
            });
            this.updateLocalStorage();
        },
        addCustomAchievement(achievement: Achievement, type: AchievementType): Achievement {
            const customData = getCustomData(store.current(), store.saves());
            const existingItem = customData
                .filter(custom => custom.achievementType === type)
                .find(custom => custom.id === achievement.id || custom.label === achievement.label);
            if (existingItem) {
                return existingItem;
            }

            customData.push({ ...achievement, achievementType: type });
            patchState(store, {
                saves: {
                    ...store.saves(),
                    [store.current()!]: {
                        ...store.saves()[store.current()!]!,
                        customData
                    }
                }
            });
            this.updateLocalStorage();
            return achievement;
        },
        updateCustomAchievement(achievement: Achievement) {
            const customData = getCustomData(store.current(), store.saves());
            const existingIndex = customData.findIndex(d => d.id === achievement.id);
            if (existingIndex !== -1) {
                customData[existingIndex] = achievement;
            } else {
                customData.push(achievement);
            }
            patchState(store, {
                saves: {
                    ...store.saves(),
                    [store.current()!]: {
                        ...store.saves()[store.current()!]!,
                        customData
                    }
                }
            });
            this.updateLocalStorage();
        }
    })),
    withComputed(({ saves, current }) => ({
        id: computed(() => getSave(current(), saves())?.id || ''),
        sims: computed(() => getSave(current(), saves())?.sims || []),
        generations: computed(() => getSave(current(), saves())?.generations || []),
        customData: computed(() => getSave(current(), saves())?.customData || []),
        traits: computed(() => {
            return [...TRAITS, ...getCustomData(current(), saves())
                .filter(a => a.achievementType === AchievementType.TRAIT)
                .map(a => a as Trait)];
        }),
        skills: computed(() => {
            return [...SKILLS, ...getCustomData(current(), saves())
                .filter(a => a.achievementType === AchievementType.SKILL)
                .map(a => a as Skill)];
        }),
        occults: computed(() => {
            return [...OCCULTS, ...getCustomData(current(), saves())
                .filter(a => a.achievementType === AchievementType.OCCULT)
                .map(a => a as OccultType)];
        }),
        aspirations: computed(() => {
            return [...ASPIRATIONS, ...getCustomData(current(), saves())
                .filter(a => a.achievementType === AchievementType.ASPIRATION)
                .map(a => a as Aspiration)]
                .map(a => ({ ...a, maxLevel: a["completed"] || false } as Aspiration));
        }),
        careers: computed(() => {
            return [...CAREER, ...getCustomData(current(), saves())
                .filter(a => a.achievementType === AchievementType.CAREER)
                .map(a => (a as Career))
            ].map(a => ({ ...a, level: a["level"] || 0 } as Career));
        }),
        medals: computed(() => {
            return [...MEDALS, ...getCustomData(current(), saves())
                .filter(a => a.achievementType === AchievementType.MEDAL)
                .map(a => a as Medal)]
                .map(a => ({ ...a, score: a["score"] || MedalScore.BRONZE } as Medal));
        }),
        deaths: computed(() => {
            return [...DEATHS, ...getCustomData(current(), saves())
                .filter(a => a.achievementType === AchievementType.DEATH)
                .map(a => a as Death)];
        }),
        gameAchievements: computed(() => {
            return [...GAME_ACHIEVEMENTS, ...getCustomData(current(), saves())
                .filter(a => a.achievementType === AchievementType.Game)
                .map(a => a as GameAchievement)];
        }),
        punishments: computed(() => {
            return [...PUNISHMENTS, ...getCustomData(current(), saves())
                .filter(a => a.achievementType === AchievementType.PUNISHMENT)
                .map(a => a as Punishment)];
        }),
        customAchievements: computed(() => {
            return getCustomData(current(), saves())
                .filter(a => a.achievementType === AchievementType.CUSTOM)
                .map(a => a as Achievement);
        }),
        collections: computed(() => {
            return [...COLLECTIONS, ...getCustomData(current(), saves())
                .filter(a => a.achievementType === AchievementType.COLLECTION)
                .map(a => a as Collection)]
                .map(a => ({ ...a, currentCount: a["currentCount"] || 0, completed: a["completed"] || false } as Collection));
        }),
        preferences: computed(() => {
            return [...PREFERENCES, ...getCustomData(current(), saves())
                .filter(a => a.achievementType === AchievementType.PREFERENCE)
                .map(a => a as Preference)]
                .map(a => ({ ...a, like: a["like"] || false } as Preference));
        })
    })));

function getSave(
    current: string | undefined,
    saves: Record<string, DataSave | undefined>): DataSave | undefined {
    if (!current) {
        alert('No save selected. Please select or create a save first.');
    }
    return saves[current!];
}
function getCustomData(current: string | undefined,
    saves: Record<string, DataSave | undefined>): Achievement[] {
    return getSave(current, saves)?.customData || [];
}