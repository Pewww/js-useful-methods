/**
 * @param array - The array to inspect.
 * @param predicate - The function invoked per iteration.
 * @param fromIndex - The index to search from.
 * This method is like _.find except that it returns the index of the first element predicate
 * returns truthy for instead of the element itself.
 */

export const findIndex = (
  array: any[],
  predicate: (value?: any, index?: number, predicateArray?: any[]) => any,
  fromIndex: number = 0
) => {
  if (!Array.isArray(array)) {
    return null;
  }

  if (typeof predicate !== 'function') {
    return 0;
  }

  const arrLeng = array.length;
  let arrIndex = (Number(fromIndex) && fromIndex > 0) ? fromIndex : 0;

  while ((arrIndex < arrLeng) && !predicate(array[arrIndex], arrIndex, array)) {
    arrIndex += 1;
  }

  return arrIndex >= arrLeng ? -1 : arrIndex;
};