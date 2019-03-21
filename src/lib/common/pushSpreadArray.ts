/**
 * @param array - The array to concatenate.
 * @param values - The values to concatenate.
 * It seems to similar with push.apply but, the maximum call stack overflow problem is settled.
 */

export const pushSpreadArray = (array: any[], values: any[]) => {
  if (!Array.isArray(array) || !Array.isArray(values)) {
    throw new TypeError('All parameters should be Array.');
  }

  const arrLeng = array.length,
        valLeng = values.length;
  let idx = 0;

  while (idx < valLeng) {
    const spreadVal = values[idx];
    array[arrLeng + idx] = spreadVal;

    idx += 1;
  }

  return array;
};