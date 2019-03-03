import {compact} from '../Array/compact';

describe('Array - compact 메서드 테스트', () => {
  test(`Input: [0, 1, false, 2, '', 3] => Output: [1, 2, 3]`, () => {
    const arr = [0, 1, false, 2, '', 3];
    expect(compact(arr)).toEqual([1, 2, 3]);
  });

  test(`Input: [null, false, '', undefined, 0, NaN] => Output: []`, () => {
    const arr = [null, false, '', undefined, 0, NaN];
    expect(compact(arr)).toEqual([]);
  });

  test(`Input: [1, true, 'hello'] => Output: [1, true, 'hello']`, () => {
    const arr = [1, true, 'hello'];
    expect(compact(arr)).toEqual([1, true, 'hello']);
  });
});