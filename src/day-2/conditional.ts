type SomeType = string;

type MyConditionalType = SomeType extends string ? string : null;
//    ^?

function someFunction<T>(value: T) {
  const someOtherFunction = (
    someargs: T extends boolean ? "typeA" : "typeB"
  ) => {
    const a: typeof someargs = someargs;
  };
  return someOtherFunction;
}

const result = someFunction(false);

type ResultType = Exclude<"a" | "b" | "c", "a">;
//    ^?

type Mytype<T> = [T] extends [string | number] ? T : never;

type MyResult = Mytype<string | number>;
//    ^?

type SomType<T> = T extends infer U ? U : T;

type InferSomething<T> = T extends { a: infer A; b: infer B } ? A & B : any;

type ress = InferSomething<{
  //    ^?
  a: { some: "thing" };
  b: { none: "thing" };
}>;

type Res = SomType<string>;
//     ^?

interface User2 {
  id: string;
  name: string;
  address: {
    street: string;
    city: string;
    pos: {
      lat: number;
      long: number;
    };
  };
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

interface MyMouseEvent {
  x: number;
  y: number;
}

interface MyKeyboardEvent {
  key: string;
}

interface Eventss {
  click: MyMouseEvent;
  keypress: MyKeyboardEvent;
}

function handleEvent<K extends keyof Eventss>(
  name: K,
  callback: (e: Eventss[K]) => void
) {
  if (name === "click") {
    callback({ x: 0, y: 0 });
  } else if (name === "keypress") {
    callback({ key: "a" });
  }
}

handleEvent("keypress", (e) => {});
//         ^?
