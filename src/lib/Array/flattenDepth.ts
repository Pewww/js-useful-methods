/**
 * @param array - The array to flatten.
 * @param depth - The maximum recursion depth.
 * Recursively flatten array up to depth times.
 */

export const flattenDepth = (array: any[], depth: number = 1) => {
    if (!Array.isArray(array)) {
      return null;
    }
  
    const depthFlattenedArr = [];
    const substantiveDepth = (Number(depth) && depth >= 1) ? depth : 1;
  
    (function _flattenDepth(arr, flatDepth) {
      for (let i = 0, arrLeng = arr.length; i < arrLeng; i++) {
        const value = arr[i];
  
        if (Array.isArray(value) && flatDepth > 0) {
          _flattenDepth(value, flatDepth - 1);
        } else {
          depthFlattenedArr.push(value);
        }
      }
    })(array, substantiveDepth);
  
    return depthFlattenedArr;
};