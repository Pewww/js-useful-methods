import {take} from '../Array';
import notSpecificTypes from '../common/notSpecificTypes';
import {ARRAY} from '../../constants/jsTypes';

describe('Array - take 메서드 테스트', () => {
  test('첫 번째 파라미터가 Array 타입이 아닐 시 [] 반환', () => {
    const notArrayTypes = notSpecificTypes(ARRAY);
    const mapped = notArrayTypes.every(v => take(v as any, 10).length === 0);

    expect(mapped).toBe(true);
  });

  test('array: [1, 2, 3, 4, 5], n: 3 일 때, [1, 2, 3] 반환', () => {
    const arr = [1, 2, 3, 4, 5];
    const takenArr = take(arr, 3);

    expect(takenArr).toEqual([1, 2, 3]);
  });

  test('array: [1, 2, 3, 4, 5], n: 10 일 때, [1, 2, 3, 4, 5] 반환', () => {
    const arr = [1, 2, 3, 4, 5];
    const takenArr = take(arr, 10);

    expect(takenArr).toEqual([1, 2, 3, 4, 5]);
  });

  test('array: [1, 2, 3, 4, 5], n: -1 일 때, [] 반환', () => {
    const arr = [1, 2, 3, 4, 5];
    const takenArr = take(arr, -1);

    expect(takenArr).toEqual([]);
  });

  test(`array: [1, 2, 3, 4, 5], n: 'Hello' 일 때, [] 반환`, () => {
    const arr = [1, 2, 3, 4, 5];
    const takenArr = take(arr, 'hello' as any);

    expect(takenArr).toEqual([]);
  });

  test(`array: [1, 2, 3, 4, 5], n: '0004' 일 때, [1, 2, 3, 4] 반환`, () => {
    const arr = [1, 2, 3, 4, 5];
    const takenArr = take(arr, '0004' as any);

    expect(takenArr).toEqual([1, 2, 3, 4]);
  });

  test('array: new Array(3), n: 3 일 때, [undefined, undefined, undefined] 반환', () => {
    const arr = new Array(3);
    const takenArr = take(arr, 3);

    expect(takenArr).toEqual([undefined, undefined, undefined]);
  });
});