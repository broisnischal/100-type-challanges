const scores = {
  one: 1,
  two: 2,
} satisfies Record<string, number>;

const config = {
  wide: "100px",
  narrow: 0,
} satisfies Record<string, string | number>;

const config2: Record<string, string | number> = {
  wide: "100px",
  narrow: 0,
};

config.narrow;

/// eg 2

type Color =
  | string
  | {
      r: number;
      g: number;
      b: number;
    };

const red: Color = "red";

const green = "green" as Color;

const blue = "blue" satisfies Color;

const black = { r: 0, g: 0, b: 0 } as const satisfies Color;
