/**
 * @param array
 * @param dropNumber
 * Creates a slice of array with n elements dropped from the beginning.
 */

export const drop = (array: any[], dropNumber: number = 1) => {
  const arrLeng = array.length;
  return array.slice(dropNumber, arrLeng);
};