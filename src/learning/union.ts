type Letters = "A" | "b" | "c";

type RemoveC<T> = T extends "c" ? never : T;

type withoutc = RemoveC<Letters>;
//         ^?

// typescript does iteration automatically , - distrubivity
