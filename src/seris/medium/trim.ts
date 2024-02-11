type Trim<S extends string> = S extends `${" " | "\n" | "\t"}${infer Mid}${
  | " "
  | "\n"
  | "\t"}`
  ? Trim<Mid>
  : S extends `${" " | "\n" | "\t"}${infer Rest}`
  ? Trim<Rest>
  : S extends `${infer Rest}${" " | "\n" | "\t"}`
  ? Trim<Rest>
  : S;
