const url = "/cat/:id/:breed?size=sm";

type urlType = typeof url;

type URLc<T extends string> = T extends `:${infer V}` ? V : T;

type result = URLc<urlType>;
