import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { DataSave, SimData } from "../model/generation.model";
import { Achievement, AchievementType, Aspiration, Career, Collection, Death, GameAchievement, Medal, MedalScore, Preference, Punishment, Skill, Trait } from "../model/achievement.model";
import { TRAITS } from "../model/traits.data";
import { computed } from "@angular/core";
import { SKILLS } from "../model/skills.data";
import { ASPIRATIONS } from "../model/aspirations.data";
import { CAREER } from "../model/career.data";
import { MEDALS } from "../model/medals.data";
import { GAME_ACHIEVEMENTS } from "../model/game-achievements.data";
import { DEATHS } from "../model/death.data";
import { PUNISHMENTS } from "../model/punishments.data";
import { COLLECTIONS } from "../model/collections.data";
import { PREFERENCES } from "../model/preferences.data";

const storageKey = 'simsave';

const initialData: DataSave = {
    id: 'initial',
    generations: [],
    sims: [],
    customData: []
};

export const DataStore = signalStore(
    { providedIn: 'root' },
    withState<DataSave>(initialData),
    withMethods((store) => ({
        loadData: (id?: string) => {
            const storage = localStorage.getItem(storageKey);
            if (storage) {
                const data = JSON.parse(storage) as DataSave[];
                if (id && data.find(d => d.id === id)) {
                    return patchState(store, data.find(d => d.id === id) || initialData);
                }
                patchState(store, data[0] || initialData);
            } else {
                patchState(store, initialData);
            }
        },

        updateData(data: DataSave) {
            patchState(store, data);
            this.updateLocalStorage();
        },
        updateLocalStorage() {
            const storeData = { id: store.id(), generations: store.generations(), sims: store.sims(), customData: store.customData() };
            const currentData = localStorage.getItem(storageKey);
            const dataList = currentData ? JSON.parse(currentData) as DataSave[] : [];
            const existingIndex = dataList.findIndex(d => d.id === store.id());
            if (existingIndex !== -1) {
                dataList[existingIndex] = storeData;
            } else {
                dataList.push(storeData);
            }
            localStorage.setItem(storageKey, JSON.stringify(dataList));
        },

        updateSim(sim: SimData) {
            const sims = store.sims();
            const existingIndex = sims.findIndex(s => s.id === sim.id);
            if (existingIndex !== -1) {
                sims[existingIndex] = sim;
            } else {
                sims.push(sim);
            }
            patchState(store, { sims });
            this.updateLocalStorage();
        },
        deleteSim(sim: SimData) {
            let generations = store.generations();
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
            const sims = store.sims().filter(s => s.id !== sim.id);
            patchState(store, { sims, generations });
            this.updateLocalStorage();
        },
        addCustomAchievement(achievement: Achievement, type: AchievementType): Achievement {
            const existingItem = store.customData().filter(custom => custom.achievementType === type)
                .find(custom => custom.id === achievement.id || custom.label === achievement.label);
            if (existingItem) {
                return existingItem;
            }
            const customData = store.customData();
            customData.push({ ...achievement, achievementType: type });
            patchState(store, { customData })
            this.updateLocalStorage();
            return achievement;
        },
        updateCustomAchievement(achievement: Achievement) {
            const customData = store.customData();
            const existingIndex = customData.findIndex(d => d.id === achievement.id);
            if (existingIndex !== -1) {
                customData[existingIndex] = achievement;
            } else {
                customData.push(achievement);
            }
            patchState(store, { customData });
            this.updateLocalStorage();
        }
    })),
    withComputed((store) => ({
        traits: computed(() => {
            return [...TRAITS, ...store.customData()
                .filter(a => a.achievementType === AchievementType.TRAIT)
                .map(a => a as Trait)];
        }),
        skills: computed(() => {
            return [...SKILLS, ...store.customData()
                .filter(a => a.achievementType === AchievementType.SKILL)
                .map(a => a as Skill)];
        }),
        aspirations: computed(() => {
            return [...ASPIRATIONS, ...store.customData()
                .filter(a => a.achievementType === AchievementType.ASPIRATION)
                .map(a => a as Aspiration)]
                .map(a => ({ ...a, maxLevel: a["completed"] || false} as Aspiration));
        }),
        careers: computed(() => {
            return [...CAREER, ...store.customData()
                .filter(a => a.achievementType === AchievementType.CAREER)
                .map(a => (a as Career))
                ].map(a => ({ ...a, level: a["level"] || 0 } as Career));
        }),
        medals: computed(() => {
            return [...MEDALS, ...store.customData()
                .filter(a => a.achievementType === AchievementType.MEDAL)
                .map(a => a as Medal)]
                .map(a => ({ ...a, score: a["score"] || MedalScore.BRONZE } as Medal));
        }),
        deaths: computed(() => {
            return [...DEATHS, ...store.customData()
                .filter(a => a.achievementType === AchievementType.DEATH)
                .map(a => a as Death)];
        }),
        gameAchievements: computed(() => {
            return [...GAME_ACHIEVEMENTS, ...store.customData()
                .filter(a => a.achievementType === AchievementType.Game)
                .map(a => a as GameAchievement)];
        }),
        punishments: computed(() => {
            return [...PUNISHMENTS, ...store.customData()
                .filter(a => a.achievementType === AchievementType.PUNISHMENT)
                .map(a => a as Punishment)];
        }),
        customAchievements: computed(() => {
            return store.customData()
                .filter(a => a.achievementType === AchievementType.CUSTOM)
                .map(a => a as Achievement);
        }),
        collections: computed(() => {
            return [...COLLECTIONS, ...store.customData()
                .filter(a => a.achievementType === AchievementType.COLLECTION)
                .map(a => a as Collection)]
                .map(a => ({ ...a, currentCount: a["currentCount"] || 0, completed: a["completed"] || false } as Collection));
        }),
        preferences: computed(() => {
            return [...PREFERENCES, ...store.customData()
                .filter(a => a.achievementType === AchievementType.PREFERENCE)
                .map(a => a as Preference)]
                .map(a => ({ ...a, like: a["like"] || false } as Preference));
        })
    })));