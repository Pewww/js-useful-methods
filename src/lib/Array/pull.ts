/**
 * Removes all given values from array using SameValueZero for equality comparisons.
 * Unlike _.without, this method mutates array.
 * Use _.remove to remove elements from an array by predicate.
 * @param array - The array to modify.
 * @param values - The values to remove.
 */

export const pull = (array: any[], ...values: any) => {
  if (!Array.isArray(array)) {
    return array;
  }

  const arrLeng = array.length;
  let idx = 0;

  while (idx < arrLeng) {
    if (values.includes(array[idx])) {
      array.splice(idx, 1);
      idx -= 1;
    }

    idx += 1;
  }

  return array;
};