type Includes<T extends readonly any[], U> = T extends [
  infer Head,
  ...infer Tail
]
  ? Equal<Head, U> extends true
    ? true
    : Includes<Tail, U>
  : false;

// I want the values to be infered in second paramter of U from the
// vaues in the array and if it already exists then shouldn't
type test = Includes<["a", "b", "c"], "">;
