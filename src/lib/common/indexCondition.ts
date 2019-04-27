/**
 * @param index - Indexes based on specific conditions
 * @param maxIndex - Maximum index based on a specific condition
 * Internal Methods for slice, findLastIndex...etc
 */

export const indexCondition = (index: number, maxIndex: number) => {
  let filteredIndex = index;

  if (typeof filteredIndex === 'number') {
    if (filteredIndex < 0) {
      filteredIndex = maxIndex + index;
    } else if (filteredIndex > maxIndex) {
      filteredIndex = maxIndex;
    }
  } else {
    filteredIndex = 0;
  }

  return filteredIndex;
};