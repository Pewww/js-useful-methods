import {concat} from './concat';

export const flatten = (array: any[]) => {
  if (!Array.isArray(array)) {
    return null;
  }
  /* const flattenArr: any[] = [];

  for (let i = 0, arrLeng = array.length; i < arrLeng; i++) {
    flattenArr.push(concat(array[i]));
  }

  return flattenArr; */
  // return array.reduce((prev, curr) => concat(prev, curr));
};