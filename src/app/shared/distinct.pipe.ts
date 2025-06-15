import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'distinct' })
export class DistinctPipe<T> implements PipeTransform {

    transform(array: T[], equals?: (a: T, b: T) => boolean): T[] {
        if (!Array.isArray(array) || array.length === 0) return [];

        if (!equals) {
            return Array.from(new Set(array));
        }

        // For custom equality, use a more efficient approach
        const result: T[] = [];
        for (const item of array) {
            if (!result.some(existing => equals(existing, item))) {
                result.push(item);
            }
        }
        return result;
    }

}


