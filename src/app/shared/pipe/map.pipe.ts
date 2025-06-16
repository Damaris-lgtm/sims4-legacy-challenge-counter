import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'map' })
export class MapPipe<T, R> implements PipeTransform {

    transform(array: T[], mapFn: (item: T) => R): R[] {
        if (!Array.isArray(array) || array.length === 0) return [];
        if (!mapFn) return array as unknown as R[];

        return array.map(mapFn);
    }

}

