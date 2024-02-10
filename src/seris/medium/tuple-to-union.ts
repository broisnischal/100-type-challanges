
type TupleToUnion<T extends readonly unknown[]> = T extends [infer Head, ...infer Tail] ? Head | TupleToUnion<Tail> : never;