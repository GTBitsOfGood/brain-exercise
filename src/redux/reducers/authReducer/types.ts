import { IUser } from "../../../types";

// It will be useful to store the authenticated state of the user and the jwt token
// for sending authenticated requests to the backend in addition to the other user info
export type AuthUser = IUser & {
  authenticated: boolean;
};
