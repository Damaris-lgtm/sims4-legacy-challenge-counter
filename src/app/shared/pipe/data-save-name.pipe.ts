import { Pipe, PipeTransform } from "@angular/core";
import { DataSave } from "../model/generation.model";

export const getDataSaveName = (item: DataSave): string => item.name || (item.generations.length > 0 ?
    (item.sims.find(s => s.id === item.generations[0].founder)?.name) : undefined) || item.id;

@Pipe({ name: 'saveName' })
export class SaveNamePipe implements PipeTransform {

    transform(item: DataSave): string {
        return getDataSaveName(item);
    }

}