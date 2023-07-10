import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "app/types/global";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword", () => {
  test("should return value", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: "pass",
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual("pass");
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual("");
  });
});
