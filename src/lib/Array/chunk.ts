/**
 * @param array - The array to process.
 * @param size - The length of each chunk
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 */

export const chunk = (array: any[], size: number = 1) => {
  const arr = [], arrLeng = array.length, s = size;
  let start = 0;

  while (start < arrLeng) {
    arr.push(array.slice(start, start + s));
    start += s;
  }

  return arr;
}