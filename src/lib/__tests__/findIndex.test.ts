import {findIndex} from '../Array';

describe('Array - findIndex 메서드 테스트', () => {
  test('[1, 2, 3, 4, 5]와 같이 array만 주어질 때 0 반환', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(findIndex(arr)).toBe(0);
  });

  test('array: [1, 2, 3, 4, 5], predicate: v => v === 5 일 때, 4 반환', () => {
    const arr = [1, 2, 3, 4, 5];

    expect(findIndex(arr, v => v === 5)).toBe(4);
  });

  test('array: [1, 2, 3, 4, 5], predicate: v => v === 7 일 때, -1 반환', () => {
    const arr = [1, 2, 3, 4, 5];

    expect(findIndex(arr, v => v === 7)).toBe(-1);
  });

  test('array: [1, 2, 3, 4, 5], predicate: v => v === 5, fromIndex: 9 일 때, -1 반환', () => {
    const arr = [1, 2, 3, 4, 5];

    expect(findIndex(arr, v => v === 5, 9)).toBe(-1);
  });

  test(`array: [1, 2, 3, 4, 5], predicate: v => v === 4, fromIndex: NaN 일 때, 3 반환`, () => {
    const arr = [1, 2, 3, 4, 5];

    expect(findIndex(arr, v => v === 4, NaN)).toBe(3);
  });

  test('파라미터가 아래 객체 배열과 같을 때 1 반환', () => {
    const users = [
      {
        active: false,
        user: 'barney',
      },
      {
        active: false,
        user: 'fred',
      },
      {
        active: true,
        user: 'pebbles',
      },
    ];

    expect(findIndex(users, o => o.user === 'fred', 1)).toBe(1);
  });
});
