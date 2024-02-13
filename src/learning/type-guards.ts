function isNumberOrString(value: any): value is number | string {
  return typeof value === "number" || typeof value === "string";
}

const value: any = "Hello";

if (isNumberOrString(value)) {
  console.log(value.toUpperCase()); // No type error
} else {
  console.error("Value is not a number or a string");
}
