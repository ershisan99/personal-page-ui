import { ReactNode } from 'react';
export type WithChildren<T = undefined> = {
  children: ReactNode;
} & (T extends undefined ? {} : T);
