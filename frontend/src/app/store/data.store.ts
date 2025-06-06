import { DataSave } from "../model/generation.model";
//import { signalStore, withState } from "@ngrx/signals";


const initialData: DataSave = {
    id: '',
    generations: [],
    sims: [],
    customData: {}
};

//export const DataStore = signalStore( withState<DataSave>(initialData) );