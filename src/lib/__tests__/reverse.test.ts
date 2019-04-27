import {reverse} from '../Array';
import {sameValueZero} from '../common/sameValueZero';

describe('Array - reverse 메서드 테스트', () => {
  test('파라미터의 타입이 Array가 아닐 시 받은 값 그대로 반환', () => {
    const notArrayTypes = [1, {a: 1, b: 2}, 'string', NaN, Symbol, undefined];
    const mapped = notArrayTypes.filter((v, idx, arr) =>
      sameValueZero(reverse(v as any), arr[idx]));

    expect(mapped).toEqual(notArrayTypes);
  });

  test('array: [1, 2, 3, 4, 5] 일 때, array: [5, 4, 3, 2, 1]로 변환', () => {
    const arr = [1, 2, 3, 4, 5];
    reverse(arr);

    expect(arr).toEqual([5, 4, 3, 2, 1]);
  });

  test(`array: [...new Array(2), {a: 1, b: 2}, NaN, 'hello', 10] 일 때,
    array: [10, 'hello', NaN, {a: 1, b: 2}, undefined, undefined]로 변환`, () => {
    const arr = [...new Array(2), {a: 1, b: 2}, NaN, 'hello', 10];
    reverse(arr);

    expect(arr).toEqual([10, 'hello', NaN, {a: 1, b: 2}, undefined, undefined]);
  });

  test('array: new Array(3) 일 때, array의 기존 요소는 변경되지 않음.', () => {
    const arr = new Array(3);
    reverse(arr);

    expect(Object.getOwnPropertyNames(arr)).toEqual(['length']);
  });

  test('array: [1,,2] 일 때, array: [2, empty, 1]로 변환', () => {
    const arr = [1,,2];
    const changed = [2,,1];
    reverse(arr);

    const shouldBeTrue = arr.every((v, idx) => sameValueZero(v, changed[idx]));

    expect(shouldBeTrue).toBe(true);
  });
});