// noUncheckedIndexedAccess

export const myobj: Record<string, string[]> = {};

myobj.foo!.push("bar");
