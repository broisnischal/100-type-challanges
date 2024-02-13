type Composition<F, G> = (arg: G) => F;

type Add = (a: number, b: number) => number;
type Double = (x: number) => number;

type AddThenDouble = Composition<Double, Add>;
