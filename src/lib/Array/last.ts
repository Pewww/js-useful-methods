/**
 * @param array - The array to query.
 * Gets the last element of array.
 */

export const last = (array: any[]) => {
  if (!Array.isArray(array) || !array.length) {
    return undefined;
  }

  return array[array.length - 1];
};
