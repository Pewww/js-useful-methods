/**
 * @param array - The array to inspect.
 * @param predicate - The function invoked per iteration.
 * @param fromIndex - The index to search from.
 * This method is like _.findIndex except that it iterates over elements of collection from right to left.
 */

export const findLastIndex = (
  array: any[],
  predicate?: (value?: any, index?: number, predicateArray?: any[]) => any,
  fromIndex: number = array && array.length - 1,
) => {
  if (!Array.isArray(array)) {
    return -1;
  }

  const arrLeng = array.length;

  if (typeof predicate !== 'function') {
    return arrLeng - 1;
  }

  let arrIndex = (Number(fromIndex) && fromIndex >= 0) ? fromIndex : arrLeng - 1;

  while (arrIndex >= 0 && !predicate(array[arrIndex], arrIndex, array)) {
    arrIndex -= 1;
  }

  return arrIndex < 0 ? -1 : arrIndex;
};
