import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Requirement, RequirementsSave } from "../model/requirements.model";
import { last } from "rxjs";

const storageKey = 'requirementsData';

const initialData: RequirementsSave = {
    id: "initial",
    label: "initial",
    requirements: []
};

export const RequirementsStore = signalStore(
    { providedIn: 'root' },
    withState<RequirementsSave>(initialData),
    withMethods((store) => ({
        loadData: (id?: string) => {
            const storage = localStorage.getItem(storageKey);
            if (storage) {
                const data = JSON.parse(storage) as RequirementsSave[];
                if (id && data.find(d => d.id === id)) {
                    return patchState(store, data.find(d => d.id === id) || initialData);
                }
                patchState(store, data[0] || initialData);
            } else {
                patchState(store, initialData);
            }
        },
        updateLocalStorage() {
            const storeData = { id: store.id(), label: store.label(), requirements: store.requirements() };
            const currentData = localStorage.getItem(storageKey);
            const dataList = currentData ? JSON.parse(currentData) as RequirementsSave[] : [];
            const existingIndex = dataList.findIndex(d => d.id === store.id());
            if (existingIndex !== -1) {
                dataList[existingIndex] = storeData;
            } else {
                dataList.push(storeData);
            }
            localStorage.setItem(storageKey, JSON.stringify(dataList));
        },
        updateRequirements(requirements: Requirement[]) {
            patchState(store, { requirements });
            this.updateLocalStorage();
        },
        updateData(data: RequirementsSave) {
            patchState(store, data);
            this.updateLocalStorage();
        }

    })));
