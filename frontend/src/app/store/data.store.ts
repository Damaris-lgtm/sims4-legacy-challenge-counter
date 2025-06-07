import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { DataSave, SimData } from "../model/generation.model";

const storageKey = 'simsave';

const initialData: DataSave = {
    id: 'initial',
    generations: [],
    sims: [],
    customData: {}
};

export const DataStore = signalStore( 
    { providedIn: 'root' },
    withState<DataSave>(initialData),
    withMethods((store) => ({
        loadData: (id?: string) =>{
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
            const storeData = {id: store.id(), generations: store.generations(), sims: store.sims(), customData: store.customData()};
            const currentData = localStorage.getItem(storageKey);
            const dataList = currentData ? JSON.parse(currentData) as DataSave[] : [];
            const existingIndex = dataList.findIndex(d => d.id === store.id());
            if (existingIndex !== -1) {
                dataList[existingIndex] = storeData;
            } else {
                dataList.push();
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
        }
    }))
 );