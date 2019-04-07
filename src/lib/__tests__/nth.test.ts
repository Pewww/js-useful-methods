import {nth} from '../Array/nth';

describe('Array - nth 메서드 테스트', () => {
  test('파라미터의 타입이 배열이 아닐 시 undefined 반환', () => {
    const arr = [1, 'hello', {obj: undefined}, null, undefined, NaN, false, 0, Symbol];
    expect(arr.every(v => nth(v as any) === undefined)).toBe(true);
  });

  test('두 번째 파라미터(n)에 숫자가 아닌 값을 넣을 시 배열의 맨 첫 번째 값 반환', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(nth(arr, 'Not a number' as any)).toBe(1);
  });

  test('두 번째 파라미터(n)이 0 보다 작을 시 배열의 길이에서 n을 더한 인덱스를 사용하여 값 반환', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(nth(arr, -3)).toBe(3);
  });

  test('두 번째 파라미터(n)이 배열의 길이보다 크거나 같을 시 undefined 반환', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(nth(arr, 10)).toBe(undefined);
  });

  test(`array: [1, 'string', 3, 10, [5]], n: 4 일 때, [5] 반환`, () => {
    const arr = [1, 'string', 3, 10, [5]];
    expect(nth(arr, 4)).toEqual([5]);
  });
});