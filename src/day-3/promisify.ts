type Promisify<F> = F extends (...args: infer Args) => infer R
  ? (...args: Args) => Promise<R>
  : never;

type CallbackFunction = (x: number, callback: (result: string) => void) => void;

type PromiseFunction = Promisify<CallbackFunction>;
