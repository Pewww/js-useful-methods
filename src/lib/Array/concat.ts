/**
 * @param items
 * Creates a new array concatenating array with any additional arrays and/or values.
 * Problem + Improvement: (Speed) Own concat < Array.prototype.concat
 */

export const concat = (...items: []) => {
  const newArr: [] = [];

  for (let i = 0, itemsLeng = items.length; i < itemsLeng; i++) {
    if (Array.isArray(items[i])) {
      newArr.push.apply(newArr, items[i]);
    } else {
      newArr.push(items[i]);
    }
  }

  return newArr;
}