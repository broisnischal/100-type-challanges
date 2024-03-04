type Foo = {
  name: string;
  age: string;
};

type Coo = {
  age: number;
  sex: string;
};

type Result = Merge<Foo, Coo>;
//    ^?

type Merge<T, K> = {
  [P in keyof T | keyof K]: P extends keyof K
    ? K[P]
    : P extends keyof T
    ? T[P]
    : never;
};
