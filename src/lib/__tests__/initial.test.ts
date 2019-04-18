import {initial} from '../Array';

describe('Array - initial 메서드 테스트', () => {
  test('파라미터 (array)가 Array 타입이 아닐 시, [] 반환', () => {
    const notArray = [1, 'string', undefined, null, {}, NaN, Symbol, () => 12];
    const emptyArrays = notArray.map(v => initial(v as any));

    expect(emptyArrays).toEqual([[], [], [], [], [], [], [], []]);
  });

  test('array: [1, 2, 3, 4, 5] 일 때, [1, 2, 3, 4] 빈환', () => {
    const arr = [1, 2, 3, 4, 5];

    expect(initial(arr)).toEqual([1, 2, 3, 4]);
  });

  test(`array: [{name: 'Pewww'}, {age: 20}] 일 때, [{name: 'Pewww'}] 반환`, () => {
    const arr = [
      {name: 'Pewww'},
      {age: 20}
    ];

    expect(initial(arr)).toEqual([{name: 'Pewww'}]);
  });
});