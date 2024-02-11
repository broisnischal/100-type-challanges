type T0 = Extract<"a" | "b" | "c", "a" | "f" | "c">;
//    ^?

export type Event =
  | {
      type: "login";
      payload: {
        userId: number;
      };
    }
  | {
      type: "signout";
    };

// so beautiful piece of code

const sendEvent = <Type extends Event["type"]>(
  ...args: Extract<Event, { type: Type }> extends { payload: infer Payload }
    ? [Type, Payload]
    : [Type]
) => {};

sendEvent("login", {
  userId: 23,
});

sendEvent("signout");
