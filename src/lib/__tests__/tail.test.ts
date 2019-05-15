import {tail} from '../Array';

describe('Array - tail 메서드 테스트', () => {
  test('파라미터가 Array 타입이 아닐 시 [] 반환', () => {
    const notArrayTypes = [1, 'string', NaN, undefined, null, {a: 1}];
    const mapped = notArrayTypes.every(v => tail(v as any).length === 0);

    expect(mapped).toBe(true);
  });

  test('array: [1, 2, 3, 4, 5] 일 때, [2, 3, 4, 5] 반환', () => {
    const arr = [1, 2, 3, 4, 5];

    expect(tail(arr)).toEqual([2, 3, 4, 5]);
  });

  test('array: [1, {a: 1, b: 2}] 일 때, [{a: 1, b: 2}] 반환', () => {
    const arr = [1, {a: 1, b: 2}];

    expect(tail(arr)).toEqual([{a: 1, b: 2}]);
  });

  test('array: new Array(2) 일 때, [undefined] 반환', () => {
    const arr = new Array(2);

    expect(tail(arr)).toEqual([undefined]);
  });
});