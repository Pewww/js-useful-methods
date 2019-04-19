import {flattenDeep} from '../Array';

describe('Array - flattenDeep 메서드 테스트', () => {
  test('파라미터가 배열이 아닐 시 null 반환', () => {
    const otherTypes = [1, 'string', {}, undefined, NaN];
    const nullArrays = otherTypes.map(v => flattenDeep(v as any));

    expect(nullArrays).toEqual([null, null, null, null, null]);
  });

  test('Input: [1, [2, [3, [4, [5]]]]] 일 때, [1, 2, 3, 4, 5] 반환', () => {
    const arr = [1, [2, [3, [4, [5]]]]];

    expect(flattenDeep(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('Input: [1, 3, 2, [4], [5, [6, [[7]], 8]]] 일 때, [1, 3, 2, 4, 5, 6, 7, 8] 반환', () => {
    const arr = [1, 3, 2, [4], [5, [6, [[7]], 8]]];

    expect(flattenDeep(arr)).toEqual([1, 3, 2, 4, 5, 6, 7, 8]);
  });

  test(`Input이 아래 function과 같을 때, [1, 2, 3, 'a', 'b', {age: 20, name: 'Pewww'}] 출력`, () => {
    function test(...args: any[]) {
      const arr: any[] = [1, [2, [[3]]]];

      arr.push(...args);
      arr.push({
        age: 20,
        name: 'Pewww',
      });

      return arr;
    }

    expect(flattenDeep(test('a', 'b'))).toEqual([1, 2, 3, 'a', 'b', {age: 20, name: 'Pewww'}]);
  });
});
