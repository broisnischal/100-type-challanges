type Properties = "propA" | "propB";

type MappaedTypes<Properties extends PropertyKey> = {
  [P in Properties]: P;
};

type MappedTypes<T> = {
  [P in keyof T]-?: T[P];
};

type MyNewType = MappedTypes<{
  a?: string;
  b: "asdf";
}>;

type Pick1<T, Properties extends keyof T> = {
  [P in Properties]: T[P];
};

type User = {
  name: string;
  age: number;
};

type MyCustomPick = Pick1<User, "age">;

// const some: Record

type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
} & {
  testing?: boolean;
};

interface Record2 {
  [key: string | number]: number;
}

let someRecord: Record2 = {
  ads: 12,
};

let somerecord: MyRecord<"A" | "B", number> = {
  A: 12,
  B: 1,
  testing: false,
};
