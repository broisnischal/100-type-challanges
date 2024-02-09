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
