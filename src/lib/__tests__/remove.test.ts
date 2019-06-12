import {remove} from '../Array';
import notSpecificTypes from '../common/notSpecificTypes';
import {ARRAY} from '../../constants/jsTypes';

describe('Array - remove 메서드 테스트', () => {
  test('첫 번째 파라미터가 Array 타입이 아닐 시, 빈 배열 반환', () => {
    const firstParams = notSpecificTypes(ARRAY);
    const predicate = (v: any) => v === 1;

    const mapped = firstParams.map((v: any) => remove(v, predicate))
    const arrayWithEmptyArr = mapped.every(v => Array.isArray(v) && !v.length);

    expect(arrayWithEmptyArr).toBe(true);
  });

  test('두 번째 파라미터가 Function 타입이 아닐 시, 빈 배열 반환', () => {
    const arr = [1, 2, 3];
    const secondParams = [1, 'string', NaN, undefined, null, {a: 1}];

    const mapped = secondParams.map((v: any) => remove(arr, v)).every(v => Array.isArray(v) && !v.length);

    expect(mapped).toBe(true);
  });

  test('array: [1, 1, 1, 1, 2], predicate: (v) => v === 1 일 시, [1, 1, 1, 1] 반환 및 array: [2]로 변환', () => {
    const arr = [1, 1, 1, 1, 2];
    const predicate = (v: any, idx: number) => v === 1 || idx > 3;
    const removedArr = remove(arr, predicate as any);

    expect(arr).toEqual([]);
    expect(removedArr).toEqual([1, 1, 1, 1, 2]);
  });

  test('array: [1, 2, 3, 4, 5], predicate: ((v, idx) => v === 2 || idx === 2) 일 시, [2, 3] 반환 및 array: [1, 4, 5]로 변환', () => {
    const arr = [1, 2, 3, 4, 5];
    const predicate = (v: any, idx: number) => v === 2 || idx === 2;
    const removedArr = remove(arr, predicate as any);

    expect(arr).toEqual([1, 4, 5]);
    expect(removedArr).toEqual([2, 3]);
  });

  test('array: [null, NaN, undefined], predicate: (v) => !v 일 시, [null, NaN, undefined] 반환 및 array: []로 변환', () => {
    const arr = [null, NaN, undefined];
    const predicate = (v: any) => !v;
    const removedArr = remove(arr, predicate);

    expect(arr).toEqual([]);
    expect(removedArr).toEqual([null, NaN, undefined]);
  });
});
