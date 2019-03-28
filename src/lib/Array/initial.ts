/**
 * @param array - The array to query.
 * Gets all but the last element of array.
 */

export const initial = (array: any[]) => {
  if (!Array.isArray(array)) {
    return [];
  }

  return array.slice(0, array.length - 1);
};