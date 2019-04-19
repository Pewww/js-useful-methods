/**
 * @param array - The array to query.
 * Gets the first element of array.
 */

export const head = (array: any[]) => {
  if (!Array.isArray(array) || !array.length) {
    return undefined;
  }

  return array[0];
};
