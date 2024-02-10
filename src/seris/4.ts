type First<T extends any[]> = T extends [] ? never : T[0];

type First1<T extends any[]> = T extends never[] ? never : T[0];

type First2<T extends any[]> = T extends [infer Head, ...infer _]
  ? Head
  : never;

type First3<T extends any[]> = T extends [infer Head, ...any] ? Head : never;
