import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Requirement, RequirementsSave } from "../shared/model/requirements.model";
import { computed } from "@angular/core";
import { ALL_ACHIEVEMENTS_TEMPLATE } from "../shared/model/requirements.all.data";

const storageKey = 'requirementsData';

type RequirementsStoreType = {
    current: string | undefined;
    saves: Record<string, RequirementsSave | undefined>;
}

const initialData: RequirementsStoreType = {
    current: undefined,
    saves: {}
};


export const RequirementsStore = signalStore(
    { providedIn: 'root' },
    withState<RequirementsStoreType>(initialData),
    withMethods((store) => ({
        loadData: (id?: string) => {
            const storage = localStorage.getItem(storageKey);
            if (storage) {
                const data = JSON.parse(storage) as RequirementsSave[];
                const saves: Record<string, RequirementsSave> = {};
                data.forEach((item) => {
                    saves[item.id] = item;
                });
                const current: string | undefined = data.length === 1 ? data[0].id : store.current();
                patchState(store, { current, saves });
            } else {
                patchState(store, initialData);
            }
        },
        updateLocalStorage() {
            localStorage.setItem(storageKey, JSON.stringify(Object.values(store.saves()).filter(s => s !== undefined)));
        },
        updateRequirements(requirements: Requirement[]) {
            if (!store.current()) {
                alert('No current rulesSet selected. Please select a save first.');
                return;
            }

            patchState(store, {
                saves: {
                    ...store.saves(),
                    [store.current()!]: {
                        ...store.saves()[store.current()!]!,
                        requirements
                    }
                }
            });
            this.updateLocalStorage();
        },
        updateData(data: RequirementsSave) {
            patchState(store, {
                saves: {
                    ...store.saves(),
                    [data.id]: data
                }
            });
            this.updateLocalStorage();
        },
        changeCurrent(current: string) {
            if (!store.saves()[current]) {
                console.warn('No rulesSet found with id ', current);
                return;
            };
            patchState(store, { current });
        },
        addNewRulesSet(_data?: RequirementsSave) {
            const data: RequirementsSave = _data || {
                ...ALL_ACHIEVEMENTS_TEMPLATE,
                id: crypto.randomUUID()
            };
            if (store.saves()[data.id]) {
                console.warn('A rulesSet with this id ', data.id, ' already exists. Please choose a different id.');
                return;
            }
            this.updateData(data);
            this.changeCurrent(data.id);
        },
        deleteRulesSet(id: string) {
            const current = store.current() === id ? undefined : store.current();
            patchState(store, { saves: { ...store.saves(), [id]: undefined }, current });
            this.updateLocalStorage();
        },
         updateLabel(label: string) {
                    if (!store.current()) {
                        alert('No save selected. Please select or create a save first.');
                        return;
                    }
                    const currentSave = store.saves()[store.current()!];
                    if (!currentSave) {
                        alert('Current save not found. Please select or create a save first.');
                        return;
                    }
                    this.updateData({
                        ...currentSave,
                        label
                    });
                }

    }),
),
withComputed((store) => ({
    currentSave: computed(() => getSave(store.current(), store.saves())),
    id: computed(() => getSave(store.current(), store.saves())?.id),
    label: computed(() => getSave(store.current(), store.saves())?.label),
    requirements: computed(() => getSave(store.current(), store.saves())?.requirements || []),
})));


function getSave(
    current: string | undefined,
    saves: Record<string, RequirementsSave | undefined>): RequirementsSave | undefined {
    if (!current) {
        alert('No save selected. Please select or create a save first.');
        return undefined;
    }
    return saves[current!];
}