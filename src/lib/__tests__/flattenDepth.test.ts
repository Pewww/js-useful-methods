import {flattenDepth} from '../Array';

describe('Array - flattenDepth 메서드 테스트', () => {
  test('array: [1, [2, [3, [4]], 5]] 이고, depth가 주어지지 않았을 시 [1, 2, [3, [4]], 5] 반환 (depth = 1과 같음)', () => {
    const arr = [1, [2, [3, [4]], 5]];

    expect(flattenDepth(arr)).toEqual([1, 2, [3, [4]], 5]);
  });

  test('array: [1, [2, [3, [4]], 5]] 이고, depth가 5일 때 [1, 2, 3, 4, 5] 반환 (flattenDeep과 같은 결과)', () => {
    const arr = [1, [2, [3, [4]], 5]];

    expect(flattenDepth(arr, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  test('첫 번째 파라미터(array)가 Array가 아닐 시 null 반환', () => {
    const notItems = [1, 'string', NaN, undefined, {}, Symbol];
    const mappedArray = notItems.map(item => flattenDepth(item as any, 10));

    expect(mappedArray).toEqual([null, null, null, null, null, null]);
  });

  test('depth가 Number가 아니거나 1보다 작을 시 1 취급, 나머진 depth 그대로 적용', () => {
    const arr = [1, [2, [3, [4, [5]]]]];
    const arrWithStringDepth = flattenDepth(arr, 'String' as any);
    const arrWithMinusDepth = flattenDepth(arr, -10000);

    expect(arrWithStringDepth).toEqual(arrWithMinusDepth);
  });
});
