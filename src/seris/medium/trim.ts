type Whitespace = " " | "\n" | "\t";

type Trim<S extends string> = S extends `${Whitespace}${infer Mid}${Whitespace}`
  ? Trim<Mid>
  : S extends `${Whitespace}${infer Rest}`
  ? Trim<Rest>
  : S extends `${infer Rest}${Whitespace}`
  ? Trim<Rest>
  : S;
