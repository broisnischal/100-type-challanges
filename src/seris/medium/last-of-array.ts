
type Last1<T extends unknown[]> = T extends [...infer _, infer Tail] ? Tail : never;



type Last<T extends unknown[]> =
  [never, ...T][T["length"]]