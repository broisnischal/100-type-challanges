type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

interface Person {
  name: string;
  age: number;
  address: {
    city: string;
    postalCode: number;
  };
}

type PartialPerson = DeepPartial<Person>;
