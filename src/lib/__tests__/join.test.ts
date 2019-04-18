import {SECOND} from '../../constants/times';
import {join} from '../Array';

describe('Array - join 메서드 테스트', () => {
  test(`Join Array with ''(empty string) seperator`, () => {
    const arr = new Array(10000).fill('Hello');
    const joinedArr = join(arr, '');

    expect(joinedArr).toEqual(arr.join(''));
  });

  test (`Join Array with '0' operator`, () => {
    const arr = new Array(10000).fill('Hello');
    const joinedArr = join(arr, '0');

    expect(joinedArr).toEqual(
      arr.reduce((prev, next) => prev + '0' + next)
    );
  });

  test(`Speed Test with Array.prototype.join`, () => {
    const arr = new Array(10000).fill('Hello');

    // Array.prototype.join
    const joinProtoBegin = Date.now();
    for (let i = 0; i < 10000; i++) {
      arr.join('Test');
    }
    const joinProtoEnd = Date.now();

    const joinProtoTimeSpent = (joinProtoEnd - joinProtoBegin) / SECOND;

    // Own Join Implementation
    const ownProtoBegin = Date.now();
    for (let i = 0; i < 10000; i++) {
      join(arr, 'Test');
    }
    const ownProtoEnd = Date.now();

    const ownProtoTimeSpent = (ownProtoEnd - ownProtoBegin) / SECOND;

    // Faster than Array.prototype.join
    // But, An accurate test is required.
    expect(ownProtoTimeSpent).toBeLessThanOrEqual(joinProtoTimeSpent);
  });
});