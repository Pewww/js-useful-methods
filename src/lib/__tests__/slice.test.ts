import {slice} from '../Array';

describe('Array - slice 메서드 테스트', () => {
  test('array의 타입이 Array가 아닐 시 빈 배열 반환', () => {
    const notArrayTypes = [1, {a: 1, b: 2}, 'string', NaN, Symbol, undefined];
    const mapped = notArrayTypes.every(v => slice(v as any).length === 0);

    expect(mapped).toBe(true);
  });

  const ONE_TO_FIVE_ARRAY = [1, 2, 3, 4, 5];

  test('array: [1, 2, 3, 4, 5] 일 경우 [1, 2, 3, 4, 5] 반환', () => {
    expect(slice(ONE_TO_FIVE_ARRAY)).toEqual(ONE_TO_FIVE_ARRAY);
  });

  test('array: [1, 2, 3, 4, 5], start: 1, end: 2 일 경우 [2] 반환', () => {
    expect(slice(ONE_TO_FIVE_ARRAY, 1, 2)).toEqual([2]);
  });

  test('array: [1, 2, 3, 4, 5], start: 1, end: 10 일 경우 [2, 3, 4, 5] 반환', () => {
    expect(slice(ONE_TO_FIVE_ARRAY, 1, 10)).toEqual([2, 3, 4, 5]);
  });

  test('array: [1, 2, 3, 4, 5], start: 1, end: -1 일 경우 [2, 3, 4] 반환', () => {
    expect(slice(ONE_TO_FIVE_ARRAY, 1, -1)).toEqual([2, 3, 4]);
  });

  test('array: [1, 2, 3, 4, 5], start: 1, end: NaN 일 경우 [] 반환', () => {
    expect(slice(ONE_TO_FIVE_ARRAY, 1, NaN)).toEqual([]);
  });

  test('array: [1, 2, 3, 4, 5], start: 1, end: 5 일 경우 [2, 3, 4, 5] 반환', () => {
    expect(slice(ONE_TO_FIVE_ARRAY, 1, 5)).toEqual([2, 3, 4, 5]);
  });

  test('array: [1, 2, 3, 4, 5], start: -3, end: 5 일 경우 [3, 4, 5] 반환', () => {
    expect(slice(ONE_TO_FIVE_ARRAY, -3, 5)).toEqual([3, 4, 5]);
  });

  test('array: [1, 2, 3, 4, 5], start: 10, end: 5 일 경우 [] 반환', () => {
    expect(slice(ONE_TO_FIVE_ARRAY, 10, 5)).toEqual([]);
  });

  test('array: [1, 2, 3, 4, 5], start: NaN, end: 5 일 경우 [1, 2, 3, 4, 5] 반환', () => {
    expect(slice(ONE_TO_FIVE_ARRAY, NaN, 5)).toEqual(ONE_TO_FIVE_ARRAY);
  });

  test('array: [1, 2, 3, 4, 5], start: -3, end: -1 일 경우 [3, 4] 반환', () => {
    expect(slice(ONE_TO_FIVE_ARRAY, -3, -1)).toEqual([3, 4]);
  });

  test('array: [1, 2, 3, 4, 5], start: -2, end: 4 일 경우 [4] 반환', () => {
    expect(slice(ONE_TO_FIVE_ARRAY, -2, 4)).toEqual([4]);
  });

  test('array: [1, 2, 3, 4, 5], start: -2, end: 3 일 경우 [] 반환', () => {
    expect(slice(ONE_TO_FIVE_ARRAY, -2, 3)).toEqual([]);
  });
});