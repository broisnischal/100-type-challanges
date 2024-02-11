type LooseAutoComplete<T extends string> = T | Omit<string, T>;

type texts = "asdf" | "fdsa";

const asf: LooseAutoComplete<texts> = "asdf";
