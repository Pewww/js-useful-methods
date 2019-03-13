/**
 * @param array - The array to query.
 * @param dropNumber - The number of elements to drop.
 * Creates a slice of array with n elements dropped from the beginning.
 */

export const drop = (array: any[], dropNumber: number = 1) => {
  const arrLeng = array.length;
  return array.slice(dropNumber, arrLeng);
};