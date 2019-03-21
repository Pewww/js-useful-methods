import {concat} from '../Array/concat';

describe('Array - concat 메서드 테스트', () => {
  test(`Input: [1], 2, [3], [[4]] => Output: [1, 2, 3, [4]]`, () => {
    const arr = [1];
    const other = concat(arr, 2, [3], [[4]]);

    expect(other).toEqual([1, 2, 3, [4]]);
  });

  test(`Input: [1, 2], [[3], 4, [5]] => Output: [1, 2, [3], 4, [5]]`, () => {
    const arr = [1, 2];
    const other = [[3], 4, [5]];
    
    expect(concat(arr, other)).toEqual([1, 2, [3], 4, [5]]);
  });
});