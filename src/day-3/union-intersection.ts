type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type UnionType = { a: number } | { b: string };
type IntersectionType = UnionToIntersection<UnionType>;
