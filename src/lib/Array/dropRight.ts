/**
 * @param array
 * @param dropNumber
 * Creates a slice of array with n elements dropped from the end.
 */

export const dropRight = (array: any[], dropNumber: number = 1) => {
  const arrLeng = array.length;
  const dropRange = (arrLeng - dropNumber) < 0 ?
    0 : (arrLeng - dropNumber);

  return array.slice(0, dropRange);
};