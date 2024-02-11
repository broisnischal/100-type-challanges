type FlattenArr2<T extends unknown[]> = T extends [infer Head, ...infer Rest]
  ? Head extends unknown[]
    ? [...FlattenArr2<Head>, ...FlattenArr2<Rest>]
    : [Head, ...FlattenArr2<Rest>]
  : [];
