/**
 * @param array - The array to flatten.
 * Flattens array a single level deep.
 */

import {pushSpreadArray} from '../common/pushSpreadArray';

export const flatten = (array: any[]) => {
  if (!Array.isArray(array)) {
    return null;
  }

  const flattenArr: any[] = [];

  for (let i = 0, arrLeng = array.length; i < arrLeng; i++) {
    const arrVal = array[i];

    if (Array.isArray(arrVal)) {
      pushSpreadArray(flattenArr, arrVal);
    } else {
      flattenArr.push(arrVal);
    }
  }

  return flattenArr;
};