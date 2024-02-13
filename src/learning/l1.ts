type ArrayElementType<T> = T extends (infer U)[] ? U : T;

type NumArray = Array<number>;
type StrOrNum = string | number;

type NumElementType = ArrayElementType<NumArray>; // Should be number
type StrOrNumType = ArrayElementType<StrOrNum>; // Should be string | number
