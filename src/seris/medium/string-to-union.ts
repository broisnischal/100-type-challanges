type StringToUnion<T extends string> = T;

type resultunion = StringToUnion<"test">;
//    ^?
