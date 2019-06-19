/**
 * @param array - The array to query.
 * @param n - The number of elements to take.
 * Creates a slice of array with n elements taken from the beginning.
 */

export const take = (array: any[], n: number = 1) => {
  if (!Array.isArray(array)) {
    return [];
  }

  const arrLeng = array.length;
  let takeN = (!Number(n) || n < 0) ? 0 : Number(n);

  if (takeN > arrLeng) {
    takeN = arrLeng;
  }

  const newArr = new Array(takeN);

  for (let idx = 0; idx < takeN; idx++) {
    newArr[idx] = array[idx];
  }

  return newArr;
};