type Tail<T extends any[]> = T extends [infer _, ...infer Rest] ? Rest : never;

type Numbers = [1, 2, 3, 4, 5];
type RemainingNumbers = Tail<Numbers>; // Result should be [2, 3, 4, 5]
