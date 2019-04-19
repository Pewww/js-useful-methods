/**
 * @param array - The array to modify.
 * @param predicate - The function invoked per iteration.
 * Removes all elements from array that predicate returns truthy for and returns an array of the removed elements.
 * The predicate is invoked with three arguments: (value, index, array).
 *
 * Note: Unlike _.filter, this method mutates array.
 * Use _.pull to pull elements from an array by value.
 */

export const remove = (array: any[], predicate: (value?: any, index?: number, predicateArray?: any[]) => any) => {
  if (!Array.isArray(array) || typeof predicate !== 'function') {
    return [];
  }

  const arrLeng = array.length;
  const removedArr = [];
  let idx = arrLeng - 1;

  while (idx >= 0) {
    const value = array[idx];

    if (predicate(value, idx, array)) {
      removedArr.push(value);
      array.splice(idx, 1);
    }

    idx -= 1;
  }

  return removedArr.reverse();
};
