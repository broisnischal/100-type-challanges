type MyCapitalize<S extends string> = S extends `${infer Head}${infer Tail}`
  ? `${Capitalize<Head>}${Tail}`
  : S;
