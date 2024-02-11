type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer Head}${From}${infer Tail}`
  ? From extends ""
    ? S
    : `${Head}${To}${Tail}`
  : S;
