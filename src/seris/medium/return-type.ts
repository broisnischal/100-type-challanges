// grabs the return type of the function

// (...args: any[]) => any it's the function
type MyReturnType<T extends Function> = T extends (...args: any[]) => infer U
  ? U
  : never;
