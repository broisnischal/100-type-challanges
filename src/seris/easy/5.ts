// length of tuple

type Length<T extends readonly unknown[]> = T["length"];

type Length1<T extends readonly unknown[]> = T extends {
  length: infer L;
}
  ? L
  : never;
