type Curry<F extends (...args: any[]) => any> = <T extends any[]>(
  ...args: T
) => args["length"] extends F["length"]
  ? ReturnType<F>
  : Curry<(...args: Tail<T>) => ReturnType<F>>;
