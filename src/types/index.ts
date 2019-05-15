/* dropWhile - dropRightWhile */
export interface IPerson {
  age: number;
  name: string;
}

export interface IUser {
  active: boolean;
  name: string;
}

/* Omit */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;