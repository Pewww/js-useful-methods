// common으로 옮길 것, key value 형식으로 변경

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
} from './types';

type TFunctionType = () => void;

type TAllTypes = string
  | any[]
  | number
  | boolean
  | object
  | null
  | undefined
  | TFunctionType
  | symbol;

const ALL_TYPES: TAllTypes[] = [
  [1, 2, 3, 4, 5],
  'Pewww',
  10,
  NaN,
  false,
  {a: 1, b: 2},
  null,
  undefined,
  () => { console.log('Welcome!'); },
  Symbol('Pewww')
];

const notSpecificTypes = (excludeType = ARRAY) => {
  let excludedData;

  switch(excludeType) {
    case ARRAY:
      excludedData = ALL_TYPES.filter(data =>
        !Array.isArray(data)
      );
    case STRING:
      excludedData = ALL_TYPES.filter(data =>
        toString.call(data) !== '[object String]'
      );
    default:
      break;
  }

  return excludedData;
};

export default notSpecificTypes;
