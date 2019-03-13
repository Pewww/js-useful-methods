/**
 * @param array - The array to query.
 * @param predicate - The function invoked per iteration.
 * Creates a slice of array excluding elements dropped from the end.
 * Elements are dropped until predicate returns falsey.
 * The predicate is invoked with three arguments: (value, index, array).
 */

export const dropRightWhile = (
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
  let arrIndex = arrLeng - 1;

  while (arrIndex >= 0 && predicate(array[arrIndex], arrIndex, array)) {
    arrIndex -= 1;
  }

  return array.slice(0, arrIndex + 1);
};