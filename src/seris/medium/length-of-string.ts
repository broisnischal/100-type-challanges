type LengthOfString<
  S extends string,
  Acc extends string[] = []
> = S extends `${infer Head}${infer Tail}`
  ? LengthOfString<Tail, [...Acc, Head]>
  : Acc["length"];
