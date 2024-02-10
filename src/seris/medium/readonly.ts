
type MyReadonly2<T extends {}, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & {
    [P in keyof T as P extends K ? never : P]: T[P]
  }

interface user {
  name: string
  nsame: string
  age: number;
}



type asdf = Prettify<MyReadonly2<user, "name">>
//     ^?
