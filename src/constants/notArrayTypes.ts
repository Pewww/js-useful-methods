type TFunctionType = () => void;

type TNotArrayTypes = string
  | number
  | boolean
  | object
  | null
  | undefined
  | TFunctionType
  | symbol;

const NOT_ARRAY_TYPES: TNotArrayTypes[] = [
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

export default NOT_ARRAY_TYPES;