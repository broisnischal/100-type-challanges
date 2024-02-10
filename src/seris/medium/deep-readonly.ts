type DeepReadonly<T> = {
  readonly [k in keyof T]: T[k] extends Record<any, any>
  ? T[k] extends Function
  ? T[k]
  : DeepReadonly<T[k]>
  : T[k]
}