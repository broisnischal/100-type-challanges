interface Person {
  name: string;
  age: number;
}

function assertPerson(obj: any): obj is Person {
  return typeof obj.name === "string" && typeof obj.age === "number";
}

const obj: any = { name: "John", age: 30 };

if (assertPerson(obj)) {
  // `obj` is now inferred as type `Person`
  console.log(obj.name); // No type error
  console.log(obj.age); // No type error
} else {
  console.error("Object is not a valid Person");
}
