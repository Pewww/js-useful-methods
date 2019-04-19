/**
 * @param array - The array to inspect.
 * @param value - The value to search for.
 * @param fromIndex - The index to search from.
 * Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons.
 * If fromIndex is negative, it's used as the offset from the end of array.
 */

import {sameValueZero} from '../common/sameValueZero';

export const indexOf = (array: any[], value: any, fromIndex: number = 0) => {
  if (!Array.isArray(array)) {
    return -1;
  }

  const arrLeng = array.length;
  let arrIndex;

  if (Number(fromIndex)) {
    arrIndex = fromIndex < 0 ? arrLeng - 1 + fromIndex : fromIndex;
  } else {
    arrIndex = 0;
  }

  while (arrIndex < arrLeng && !sameValueZero(array[arrIndex], value)) {
    arrIndex += 1;
  }

  return arrIndex >= arrLeng ? -1 : arrIndex;
};
