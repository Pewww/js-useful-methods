/**
 * @param array - The array to compact.
 * Creates an array with all falsey values removed.
 * The values false, null, 0, "", undefined, and NaN are falsey.
 */

export const compact = (array: any[]) => {
  return array.filter(item => !!item);
};