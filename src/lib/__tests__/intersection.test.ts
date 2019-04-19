import {intersection} from '../Array';

describe('Array - intersection 메서드 테스트', () => {
  test('하나라도 배열이 아닌 값이 들어갈 시, 빈 배열 반환', () => {
    expect(intersection([1, 5], [5, 2], [3, 5], [4, 2, 5], 5)).toEqual([]);
  });

  test('하나의 배열에만 나머지 배열과 다른 값이 들어가 있을 시, 빈 배열 반환', () => {
    expect(intersection(['hello', 2], ['hello', 2], [2, 'hello'], [3, 'Bye'])).toEqual([]);
  });

  test('Input: ([1], [3, 1], [4, undefined, 1]) 일 시, [1] 반환', () => {
    expect(intersection([1], [3, 1], [4, undefined, 1])).toEqual([1]);
  });

  test('Input: ([null, undefined, NaN], [null, NaN, false], [NaN, 0]) 일 시, [NaN] 반환', () => {
    expect(intersection([null, undefined, NaN], [null, NaN, false], [NaN, 0])).toEqual([NaN]);
  });

  test('Input: ([1, 1, {1: 1}, {1: 1}, 5, [3]], [5, 1, {1: 1}, [3]]) 일 시, [1, 5] 반환', () => {
    expect(intersection([1, 1, {1: 1}, {1: 1}, 5, [3]], [5, 1, {1: 1}, [3]])).toEqual([1, 5]);
  });
});
