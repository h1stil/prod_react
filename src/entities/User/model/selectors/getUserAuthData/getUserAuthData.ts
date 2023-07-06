import { StateSchema } from "app/providers/StoreProvider";

export const getuserAuthData = (state: StateSchema) => state.user.authData;
