/**
 * @param array
 * Creates an array with all falsey values removed.
 * The values false, null, 0, "", undefined, and NaN are falsey.
 */

export const compact = (array: []) => {
  return array.filter(item => !!item);
};