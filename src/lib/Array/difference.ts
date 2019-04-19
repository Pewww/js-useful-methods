/**
 * @param inspectArray - The array to inspect.
 * @param excludeValues - The values to exclude.
 * Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.
 * The order and references of result values are determined by the first array.
 */

export const difference = (inspectArray: any[], excludeValues: any[]) => {
  const excludeObj: any = {};
  const inspectedArr: any = [];

  for (let i = 0, valsLeng = excludeValues.length; i < valsLeng; i++) {
    const val = excludeValues[i];
    excludeObj[val] = val;
  }

  for (let j = 0, arrLeng = inspectArray.length; j < arrLeng; j++) {
    const val = inspectArray[j];

    if (!excludeObj.hasOwnProperty(val) && !inspectedArr.includes(val)) {
      inspectedArr.push(val);
    }
  }

  return inspectedArr;
};
