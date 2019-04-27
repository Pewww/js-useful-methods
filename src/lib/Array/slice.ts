import {indexCondition} from "../common/indexCondition";

/**
 * @param array - The array to slice.
 * @param start - The start position.
 * @param end - The end position.
 * Creates a slice of array from start up to, but not including, end.
 * Note: This method is used instead of Array#slice to ensure dense arrays are returned.
 * 
 * - Start Index Condition -
 * smaller than 0: array.length + given index (negative number)
 * Bigger than array.length: array.length
 * Not Number: 0
 * 
 * - End Index Condition -
 * Same as Start Index Condition
 */

export const slice = (
  array: any[],
  start: number = 0,
  end: number = Array.isArray(array) ? array.length : 0
) => {
  if (!Array.isArray(array)) {
    return [];
  }

  const arrLeng = array.length;

  const sliceStartIdx = indexCondition(start, arrLeng);
  const sliceEndIdx = indexCondition(end, arrLeng);
  const arrFinalLeng = sliceEndIdx - sliceStartIdx;

  const newArr = new Array(arrFinalLeng < 0 ? 0 : arrFinalLeng);

  let startFromZeroIndex = 0;

  for (let idx = sliceStartIdx; idx < sliceEndIdx; idx++) {
    newArr[startFromZeroIndex++] = array[idx];
  }

  return newArr;
};