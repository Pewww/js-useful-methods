/**
 * @param array
 * @param size
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 */

export const chunk = (array: any[], size: number) => {
  if (!size) return array;

  const arr = [], arrLeng = array.length, s = size;
  let start = 0;

  while (start < arrLeng) {
    arr.push(array.slice(start, start + s));
    start += s;
  }

  return arr;
}