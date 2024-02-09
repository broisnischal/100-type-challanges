interface BaseThing {
  name?: string;
  id: string;
}

interface CoolThing extends BaseThing {
  cool: boolean;
}

interface CoolthingUpdate extends BaseThing {
  changed: string;
}

const af: Prettify<CoolthingUpdate> = {
  name: "hello",
  id: "hello",
  changed: "hello",
};

type A = {
  A: string;
};
type B = {
  B: string;
};
type C = {
  C: string;
};

type D = A & B & C;

type prettifiedD = Prettify<D>;

type Prettify<T> = {
  [P in keyof T]: T[P];
} & {};
