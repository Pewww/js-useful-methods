import {flatten} from '../Array';
import notSpecificTypes from '../common/notSpecificTypes';
import {ARRAY} from '../../constants/jsTypes';

describe('Array - flatten 메서드 테스트', () => {
  test('Input: [1, 2, 3, 4, [5], [6, [7]]] 일 때, Output: [1, 2, 3, 4, 5, 6, [7]]', () => {
    const array = [1, 2, 3, 4, [5], [6, [7]]];

    expect(flatten(array)).toEqual([1, 2, 3, 4, 5, 6, [7]]);
  });

  test('Input: [[1, 2], [3, 4]] 일 때, Output: [1, 2, 3, 4]', () => {
    const array = [[1, 2], [3, 4]];

    expect(flatten(array)).toEqual([1, 2, 3, 4]);
  });

  test('Input: [1, [2, [3, [4]], 5]] 일 때, Output: [1, 2, [3, [4]], 5]', () => {
    const array = [1, [2, [3, [4]], 5]];

    expect(flatten(array)).toEqual([1, 2, [3, [4]], 5]);
  });

  test('파라미터가 배열이 아닐 때 null 반환', () => {
    function add(num1: number, num2: number) {
      return num1 + num2;
    }

    const parameters = notSpecificTypes(ARRAY);
    const filtered = parameters.filter(v => v === null);

    expect(filtered).toEqual([]);
  });
});
