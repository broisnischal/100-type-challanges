type AppendArgument<T extends (...args: any[]) => unknown, A> = (
  ...args: [...Parameters<T>, A]
) => ReturnType<T>;

// [...T, U]
