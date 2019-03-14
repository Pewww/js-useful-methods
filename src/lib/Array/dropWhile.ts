/**
 * @param array - The array to query.
 * @param predicate - The function invoked per iteration.
 * Creates a slice of array excluding elements dropped from the beginning.
 * Elements are dropped until predicate returns falsey.
 * The predicate is invoked with three arguments: (value, index, array).
 */

export const dropWhile = (
  array: any[],
  predicate?: (value?: any, index?: number, predicateArray?: any[]) => any
) => {
  if (!Array.isArray(array)) {
    return null;
  }

  if (typeof predicate !== 'function') {
    return array;
  }

  const arrLeng = array.length;
  let arrIndex = 0;

  while ((arrIndex <= arrLeng - 1) && predicate(array[arrIndex], arrIndex, array)) {
    arrIndex += 1;
  }

  return array.slice(arrIndex, arrLeng);
};