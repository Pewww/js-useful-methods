import {characterNotation} from '../etc';
import notSpecificTypes from '../common/notSpecificTypes';
import {STRING} from '../../constants/jsTypes';

describe('etc - characterNotation 메서드 테스트', () => {
  test(`str: '100', unit: 3, character: ',' 일 때, '100' 반환`, () => {
    expect(characterNotation('100', 3, ',')).toBe('100');
  });

  test(`str: '1000', unit: 3, character: ',' 일 때, '1,000' 반환`, () => {
    expect(characterNotation('1000', 3, ',')).toBe('1,000');
  });

  test(`str: '10000', unit: 3, character: ',' 일 때, '10,000' 반환`, () => {
    expect(characterNotation('10000', 3, ',')).toBe('10,000');
  });

  test(`str: '1000000000', unit: 3, character: ',' 일 때, '1,000,000,000' 반환`, () => {
    expect(characterNotation('1000000000', 3, ',')).toBe('1,000,000,000');
  });

  test(`str: 'Hello', unit: 1, character: '!' 일 때, 'H!e!l!l!o' 반환`, () => {
    expect(characterNotation('Hello', 1, '!')).toBe('H!e!l!l!o');
  });

  test(`str: 'Cat', unit: undefined, character: 'love' 일 때, 'Clovealovet' 반환`, () => {
    expect(characterNotation('Cat', undefined as any, 'love')).toBe('Clovealovet');
  });

  test(`str: 'Pewww', unit: 6, character: 'OverSize' 일 때, 'Pewww' 반환`, () => {
    expect(characterNotation('Pewww', 6, 'OverSize')).toBe('Pewww');
  });

  test(`str이 String 타입이 아닐 시, str 그대로 반환`, () => {
    const notStringTypes = notSpecificTypes(STRING);
    const mapped = notStringTypes.map(v => characterNotation(v as any, 1, 'same'));

    expect(mapped).toEqual(notStringTypes);
  });
});
