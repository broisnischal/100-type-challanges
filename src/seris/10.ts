//Array

// push
type Push<T extends readonly unknown[], U> = [...T, U];

// unshift
type Unshift<T extends readonly unknown[], U> = [U, ...T];
