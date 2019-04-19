/**
 * @param arrays - The arrays to inspect.
 * Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons.
 * The order and references of result values are determined by the first array.
 */

export const intersection = (...arrays: any) => {
  const [first, ...rest] = arrays;

  if (!Array.isArray(first)) {
    return [];
  }

  let intersectionArr = [];

  for (let i = 0, restLeng = rest.length; i < restLeng; i++) {
    const restArr = rest[i];

    if (Array.isArray(restArr as any)) {
      intersectionArr = first.filter(item => restArr.includes(item));
    } else {
      return [];
    }
  }

  return [...new Set(intersectionArr)];
};
