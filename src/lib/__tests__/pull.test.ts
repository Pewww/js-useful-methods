import {pull} from '../Array';
import notSpecificTypes from '../common/notSpecificTypes';
import {ARRAY} from '../../constants/jsTypes';

describe('Array - pull 메서드 테스트', () => {
  test('첫 번째 파라미터의 타입이 Array가 아닐 시, 그대로 값 반환', () => {
    const arr = notSpecificTypes(ARRAY);
    const mappedArr = arr.map(v => pull(v as any, 1));

    expect(mappedArr).toEqual(arr);
  });

  test('array: [1, 1, 1, 1, 2], values: 1일 경우, array: [2] 변환 및 그대로 반환', () => {
    const arr = [1, 1, 1, 1, 2];
    const pulledArr = pull(arr, 1);

    expect(pulledArr).toEqual([2]);
    expect(arr).toEqual(pulledArr);
  });

  test('array: [1, 2, 3, 4, [5]], values: 1, 2, [5]일 경우, array: [3, 4, [5]] 변환 및 그대로 반환', () => {
    const arr = [1, 2, 3, 4, [5]];
    const pulledArr = pull(arr, 1, 2, [5]);

    expect(pulledArr).toEqual([3, 4, [5]]);
    expect(arr).toEqual(pulledArr);
  });

  test('array: [1, 2, 3], values: 4, 5, 6일 경우, array는 불변', () => {
    const arr = [1, 2, 3];
    const pulledArr = pull(arr, 4, 5, 6);

    expect(pulledArr).toEqual([1, 2, 3]);
    expect(arr).toEqual(pulledArr);
  });

  test('array: [null, undefined, NaN, +0], values: NaN, -0일 경우, array: [null, undefined] 변환 및 그대로 반환', () => {
    const arr = [null, undefined, NaN, +0];
    const pulledArr = pull(arr, NaN, -0);

    expect(pulledArr).toEqual([null, undefined]);
    expect(arr).toEqual(pulledArr);
  });
});
