import {chunk} from '../Array';

describe('Array - chunk 메서드 테스트', () => {
  test(`['a', 'b', 'c', 'd'] 배열 1개씩 chunk`, () => {
    const arr = ['a', 'b', 'c', 'd'];
    expect(chunk(arr)).toEqual(
      [
        ['a'],
        ['b'],
        ['c'],
        ['d']
      ]
    );
  });

  test(`['a', 'b', 'c', 'd'] 배열 2개씩 chunk`, () => {
    const arr = ['a', 'b', 'c', 'd'];
    expect(chunk(arr, 2)).toEqual(
      [
        ['a', 'b'],
        ['c', 'd']
      ]);
  });

  test(`['a', 'b', 'c', 'd'] 배열 3개씩 chunk`, () => {
    const arr = ['a', 'b', 'c', 'd'];
    expect(chunk(arr, 3)).toEqual(
      [
        ['a', 'b', 'c'],
        ['d']
      ]);
  });

  test(`['a', 'b', 'c', 'd'] 배열 4개씩 chunk`, () => {
    const arr = ['a', 'b', 'c', 'd'];
    expect(chunk(arr, 4)).toEqual([['a', 'b', 'c', 'd']]);
  });
});