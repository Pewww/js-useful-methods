// @TODO: 함수 설명에 대한 주석 추가

import {
  TAllTypes,
  TAllTypesToString
} from '../../@types/jsTypes';
import {
  ARRAY,
  BOOLEAN,
  FUNCTION,
  NULL,
  NUMBER,
  OBJECT,
  STRING,
  SYMBOL,
  UNDEFINED
} from '../../constants/jsTypes';

interface IAllTypes {
  type: TAllTypesToString;
  value: TAllTypes;
}

const ALL_TYPES: IAllTypes[] = [
  {
    type: ARRAY,
    value: [1, 2, 3, 4, 5]
  },
  {
    type: STRING,
    value: 'Pewww'
  },
  {
    type: NUMBER,
    value: 10
  },
  {
    type: NUMBER,
    value: NaN
  },
  {
    type: BOOLEAN,
    value: false
  },
  {
    type: OBJECT,
    value: {a: 1, b: 2}
  },
  {
    type: NULL,
    value: null
  },
  {
    type: UNDEFINED,
    value: undefined
  },
  {
    type: FUNCTION,
    value: () => { console.log('Welcome!'); }
  },
  {
    type: SYMBOL,
    value: Symbol('Pewww')
  }
];

const notSpecificTypes = (excludeType: TAllTypesToString) =>
  ALL_TYPES.filter(({type}) => type !== excludeType);

export default notSpecificTypes;