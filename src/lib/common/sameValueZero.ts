/**
 * @param x - The value to inspect.
 * @param y - The value to compare with x.
 * return true or false that using the sameValueZero algorithm to determine whether the given element is found.
 */

export const sameValueZero = (x: any, y: any) => {
  return (x === y) || Object.is(x, y);
};