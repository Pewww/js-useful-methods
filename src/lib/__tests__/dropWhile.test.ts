import {IPerson, IUser} from '../../@types/drop';
import {dropWhile} from '../Array';

describe('Array - dropWhile 메서드 테스트', () => {
  test('첫 번째 파라미터(array)가 배열이 아닌 경우 null 반환', () => {
    const notArrayTypes = [1, 'hello', {a: 'do'}, undefined, (v: any) => v];
    const nullArray = notArrayTypes.map(item => dropWhile(item as any));

    expect(nullArray).toEqual([null, null, null, null, null]);
  });

  test('두 번째 파라미터(predicate)가 함수가 아닌 경우 배열 그대로 반환', () => {
    const numArr = [1, 2, 3, 4, 5];

    expect(dropWhile(numArr, {} as any)).toEqual(numArr);
  });

  test(`파라미터가 각각 ([{age: 19, name: 'minsu'}, {age: 21, name: 'sujin'}], person => person.name)일 때 [] 반환`, () => {
    const personArr = [
      {
        age: 19,
        name: 'minsu',
      },
      {
        age: 21,
        name: 'sujin',
      },
    ];

    expect(dropWhile(personArr, (person: IPerson) => person.name)).toEqual([]);
  });

  test('파라미터가 각각 ([1, 2, undefined, 5,undefined, 6, 6, 4], v => v)일 때, [undefined, 5, undefined, 6, 6, 4] 반환', () => {
    const arr = [1, 2, undefined, 5, undefined, 6, 6, 4];

    expect(dropWhile(arr, v => v)).toEqual([undefined, 5, undefined, 6, 6, 4]);
  });

  test(`파라미터가 아래 주석과 같을 때, 받은 객체 배열 파라미터 그대로 반환`, () => {
    // Array - [{active: true, user: 'barney'}, {active: false, user: 'fred'}, {active: false, user: 'peblo'}]
    // Predicate - function (item) { return !item.active; }
    const userArr = [
      {
        active: true,
        user: 'barney',
      },
      {
        active: false,
        user: 'fred',
      },
      {
        active: false,
        user: 'peblo',
      },
    ];
    const func = function(item: IUser) {
      return !item.active;
    };

    expect(dropWhile(userArr, func)).toEqual(userArr);
  });
});
