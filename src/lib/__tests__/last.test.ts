import {last} from '../Array';
import notSpecificTypes from '../common/notSpecificTypes';
import {ARRAY} from '../../constants/jsTypes';

describe('Array - last 메서드 테스트', () => {
  test('파라미터가 배열이 아닐 시 undefined 반환', () => {
    const notArrayTypes = notSpecificTypes(ARRAY);
    const mapped = notArrayTypes.map(v => last(v as any));

    expect(mapped.every(v => v === undefined)).toBe(true);
  });

  test('Input: [1, 2, 3, 4, 5] 일 때, Output: 5', () => {
    const arr = [1, 2, 3, 4, 5];

    expect(last(arr)).toBe(5);
  });

  test(`Input: [{name: 'Pewww', age: 20}, 'Pewww', 'hello'] 일 때, Output: 'hello'`, () => {
    const arr = [
      {
        age: 20,
        name: 'Pewww',
      },
      'Pewww',
      'hello',
    ];

    expect(last(arr)).toBe('hello');
  });
});
