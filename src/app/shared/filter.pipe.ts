import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'filter' })
export class FilterPipe<T> implements PipeTransform {

    transform(array: T[], predicate: (item: T) => boolean): T[] {
        if (!Array.isArray(array) || array.length === 0) return [];
        if (!predicate) return array;

        return array.filter(predicate);
    }

}

