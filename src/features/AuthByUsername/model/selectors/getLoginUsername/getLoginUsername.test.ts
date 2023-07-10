import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "app/types/global";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginUsername", () => {
  test("should return value", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "user",
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual("user");
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual("");
  });
});
