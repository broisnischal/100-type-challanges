type MyPick<T extends {}, K extends keyof T> = {
  [P in K]: T[P];
};

type User = {
  name: string;
  age: number;
  position: {
    x: number;
    y: number;
  };
};

type Picked = MyPick<User, "age">;

type OptionsFlags<T> = {
  [P in keyof T]: false;
};

function getProperty<T extends {}, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: "asdf" };

const val = getProperty(x, "d");
//     ^?

type returned = ReturnType<typeof getProperty>;
//    ^?

type Point = { x: number; y: number };
const point = { x: "value", y: "y", z: "z" } as const;
type P = Prettify<(typeof point)[keyof typeof point]>;
//   ^?

type Prettify<T> = {
  [P in keyof T]: T[P];
} & {};

type Keys = "name" | "age" | "job";

type PropertyTypes = {
  [P in Keys]: string;
};

type PropertyTypes2 = {
  [P in "name" | "age" | "job"]: string;
};

const MYARR = [
  {
    name: "hello",
    age: 12,
  },

  {
    name: "hello",
    age: 12,
  },
];

type val = (typeof MYARR)[number];
//   ^?

type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

type FlattenArr = Flatten<typeof MYARR>;
//    ^?
