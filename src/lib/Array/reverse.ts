/**
 * @param array - The array to modify.
 * Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.
 */

export const reverse = (array: any[]) => {
  if (!Array.isArray(array)) {
    return array;
  }

  const slicedArr = array.slice();
  const sparseKeysArr = Object.keys(slicedArr);
  const sparseKeysObj = {} as any;

  for (let idx = 0, sparseKeysLeng = sparseKeysArr.length; idx < sparseKeysLeng; idx++) {
    const sparseValue = sparseKeysArr[idx];
    sparseKeysObj[sparseValue] = sparseValue;
  }

  let originalStartIdx = array.length - 1;
  let slicedStartIdx = 0;

  while (originalStartIdx >= 0) {
    if (sparseKeysObj[originalStartIdx] !== undefined) {
      array[originalStartIdx] = slicedArr[slicedStartIdx];
    }

    originalStartIdx -= 1;
    slicedStartIdx += 1;
  }
};