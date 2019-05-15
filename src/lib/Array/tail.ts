import {slice} from './slice';

/**
 * @param array - The array to query.
 * Gets all but the first element of array.
 */

export const tail = (array: any[]) => {
  if (!Array.isArray(array)) {
    return [];
  }

  return slice(array, 1, array.length);
};