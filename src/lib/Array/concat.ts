/**
 * @param items - The values to concatenate.
 * Creates a new array concatenating array with any additional arrays and/or values.
 * First Parameter is the array to concatenate.
 */

import {pushSpreadArray} from '../common/pushSpreadArray';

export const concat = (...items: any[]) => {
  const newArr = [];

  for (let i = 0, itemsLeng = items.length; i < itemsLeng; i++) {
    const itemVal = items[i];

    if (Array.isArray(itemVal)) {
      pushSpreadArray(newArr, itemVal);
    } else {
      newArr.push(itemVal);
    }
  }

  return newArr;
}