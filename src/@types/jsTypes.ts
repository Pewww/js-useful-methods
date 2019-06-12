export type TString = 'string';
export type TArray = 'array';
export type TNumber = 'number';
export type TBoolean = 'boolean';
export type TObject = 'object';
export type TNull = 'null';
export type TUndefined = 'undefined';
export type TFunction = 'function';
export type TSymbol = 'symbol';

export const STRING: TString = 'string';
export const ARRAY: TArray = 'array';
export const NUMBER: TNumber = 'number';
export const BOOLEAN: TBoolean = 'boolean';
export const OBJECT: TObject = 'object';
export const NULL: TNull = 'null';
export const UNDEFINED: TUndefined = 'undefined';
export const FUNCTION: TFunction = 'function';
export const SYMBOL: TSymbol = 'symbol';

type TFunctionType = () => void;

export type TAllTypes = string
  | any[]
  | number
  | boolean
  | object
  | null
  | undefined
  | TFunctionType
  | symbol;;

export type TAllTypesToString = TString
  | TArray
  | TNumber
  | TBoolean
  | TObject
  | TNull
  | TUndefined
  | TFunction
  | TSymbol;