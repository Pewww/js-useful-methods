/**
 * @param array - The array to flatten.
 * Recursively flattens array.
 */

export const flattenDeep = (array: any[]) => {
  if (!Array.isArray(array)) {
    return null;
  }

  const deepFlattenedArr = [];

  (function _flattenDeep(arr) {
    for (let i = 0, arrLeng = arr.length; i < arrLeng; i++) {
      const value = arr[i];

      if (Array.isArray(value)) {
        _flattenDeep(value);
      } else {
        deepFlattenedArr.push(value);
      }
    }
  })(array);

  return deepFlattenedArr;
};
