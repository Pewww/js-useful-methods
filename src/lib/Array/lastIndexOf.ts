/**
 * @param array - The array to inspect.
 * @param value - The value to search for.
 * @param fromIndex - The index to search from.
 * This method is like _.indexOf except that it iterates over elements of array from right to left.
 */

import {sameValueZero} from '../common/sameValueZero';

export const lastIndexOf = (
  array: any[],
  value: any,
  fromIndex: number = array && array.length - 1
) => {
  if (!Array.isArray(array)) {
    return -1;
  }

  const arrLeng = array.length;
  let arrIndex;

  if (Number(fromIndex)) {
    arrIndex = fromIndex < 0 ?
      ((arrLeng - 1) + fromIndex) : fromIndex;
  } else {
    arrIndex = arrLeng - 1;
  }

  while ((arrIndex >= 0) && !sameValueZero(array[arrIndex], value)) {
    arrIndex -= 1;
  }

  return arrIndex < 0 ? -1 : arrIndex;
};