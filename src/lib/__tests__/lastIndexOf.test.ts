import {lastIndexOf} from '../Array/lastIndexOf';

describe('Array - lastIndexOf 메서드 테스트', () => {
  test('첫 번째 파라미터(array)의 타입이 Array가 아닐 시 -1 반환', () => {
    const notArray = [1, 'string', undefined, null, {}, NaN, Symbol, () => 12];
    const result = notArray.every(v => lastIndexOf(v as any, 1) === -1);

    expect(result).toBe(true);
  });

  test('fromIndex가 숫자가 아닐 시, 0으로 취급', () => {
    const arr = [1, 2, 3, 4, 5];

    expect(lastIndexOf(arr, 4, `I'm string!` as any)).toBe(3);
  });

  test('fromIndex가 음수일 시, 배열의 끝에서 오프셋으로 사용', () => {
    const arr = [1, 2, 3, 4, 3];

    expect(lastIndexOf(arr, 3, -2)).toBe(2);
  });

  test('value가 NaN일 시, 동등 취급하여 인덱스 반환', () => {
    const arr = [1, undefined, null, NaN];

    expect(lastIndexOf(arr, NaN)).toBe(3);
  });
  
  test('value가 array의 item과 같은 형태의 배열일 시 -1 반환', () => {
    const arr = [1, 2, 3, 4, [5]];

    expect(lastIndexOf(arr, [5])).toBe(-1);
  });

  test('Input: ([1, 2, 3, 4, 5, 3, 5], 3, 3) 일 시, 인덱스 2 반환', () => {
    const arr = [1, 2, 3, 4, 5, 3, 5];

    expect(lastIndexOf(arr, 3, 3)).toBe(2);
  });
});