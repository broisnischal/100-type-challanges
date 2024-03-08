const url = "/cat/:id/:breed?size=sm";

type URLType = typeof url;

type ParamObject<T extends string> = T extends `:${infer P}${infer R}`
  ? { [K in P]: string } & ParamObject<R>
  : {};

type PARAMResul = ParamObject<URLType>;

type QueryObject<T extends string> = T extends `?${infer Q}`
  ? Q extends `${infer K}=${infer V}&${infer Rest}`
    ? { [K in K]: V } & QueryObject<Rest>
    : Q extends `${infer K}=${infer V}`
    ? { [K in K]: V }
    : never
  : {};

type URLResult<T extends string> = {
  params: ParamObject<T>;
  query: QueryObject<T>;
};

type Result3 = URLResult<URLType>;

// Test
const result: Result3 = {
  params: { id: "123", breed: "persian" },
  query: { size: "sm" },
};

console.log(result);
