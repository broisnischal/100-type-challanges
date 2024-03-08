// const url = "/cat/:id/:breed?size=sm";
const url = "/cat/:id/:breed";

type URLType = typeof url;

type Splitter<
  T extends string,
  U extends string
> = T extends `${infer L}${U}${infer R}`
  ? [L, ...Splitter<R, U>]
  : T extends `${infer L}`
  ? [L]
  : [];

type SplitUrl = Splitter<URLType, "/">;

type MergeParams<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;

type Params<T extends string> = T extends `:${infer R}`
  ? { [P in R]: string }
  : never;

type UrlParams = MergeParams<Params<SplitUrl[number]>>;
//    ^?

const parma: UrlParams = {
  id: "asdf",
};
