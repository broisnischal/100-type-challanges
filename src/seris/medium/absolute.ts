type Absolute<T extends string> = T extends `-${infer R}` ? R : T;
