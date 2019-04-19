import {difference} from '../Array';

describe('Array - difference 메서드 테스트', () => {
  test(`Input: Array - [2, 1, 45, 'a'], Values - [2, 3, 4, 'a']일 때, Output: [1, 45]`, () => {
    const array = [2, 1, 45, 'a'];
    const values = [2, 3, 4, 'a'];

    expect(difference(array, values)).toEqual([1, 45]);
  });

  test('완전히 다른 배열일 때 Array 배열 그대로 반환', () => {
    const array = [1, 2, 3, 4, 5];
    const values = [6, 7, 8, 9, 10];

    expect(difference(array, values)).toEqual(array);
  });

  test(`두 배열 모두 동일한 Falsy 값들([null, false, '', undefined, 0, NaN])이 들어갔을 때 [] 출력`, () => {
    const array = [null, false, '', undefined, 0, NaN];
    const values = [null, false, '', undefined, 0, NaN];

    expect(difference(array, values)).toEqual([]);
  });
});
