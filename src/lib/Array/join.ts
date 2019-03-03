/**
 * @param array
 * @param seperator
 * Converts all elements in array into a string separated by separator.
 */

export const join = (array: any[], seperator: string) => {
  let s = '';

  for (let i = 0, arrLeng = array.length; i < arrLeng; i++) {
    s += array[i];

    if (i !== arrLeng - 1) {
      s += seperator;
    }
  }

  return s;
};