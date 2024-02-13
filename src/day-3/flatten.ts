type Flatten<T> = {
  [K in keyof T]: T[K] extends object ? Flatten<T[K]> : T[K];
};

interface NestedObject {
  a: {
    b: {
      c: number;
    };
  };
}

type FlatObject = Flatten<NestedObject>;
