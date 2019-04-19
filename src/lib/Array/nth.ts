/**
 * @param array - The array to query.
 * @param n - The index of the element to return.
 * Gets the element at index n of array.
 * If n is negative, the nth element from the end is returned.
 */

export const nth = (array: any[], n: number = 0) => {
  if (!Array.isArray(array)) {
    return undefined;
  }

  const arrLeng = array.length;
  let arrIndex;

  if (Number(n)) {
    arrIndex = n < 0 ? arrLeng + n : n;
  } else {
    arrIndex = 0;
  }

  return array[arrIndex];
};
