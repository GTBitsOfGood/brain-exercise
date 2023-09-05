/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUser } from "./types";
import { Role } from "../../../types";

const initialState: AuthUser = {
  _id: "",
  name: "",
  email: "",
  phoneNumber: "",
  birthdate: Date(),
  signedUp: false,
  authenticated: false,
  secondaryContactName: "",
  secondaryContactPhone: "",
  role: Role.NONPROFIT_USER,
};

// Helper function to copy all properties from newState over to the existing state
const setState = (state: AuthUser, newState: AuthUser): void => {
  state._id = newState._id;
  state.name = newState.name;
  state.email = newState.email;
  state.phoneNumber = newState.phoneNumber;
  state.birthdate = newState.birthdate;
  state.signedUp = newState.signedUp;
  state.secondaryContactName = newState.secondaryContactName;
  state.secondaryContactPhone = newState.secondaryContactPhone;
  state.authenticated = newState.authenticated;
  state.role = newState.role;
};

const authReducer = createSlice({
  name: "authInfo",
  initialState,
  reducers: {
    // Update the authState with the user information
    login(state, action: PayloadAction<AuthUser>) {
      setState(state, action.payload);
    },
    // Clear the authState
    logout(state) {
      setState(state, initialState);
    },
    setFirstTimeLogin(state, action: PayloadAction<boolean>) {
      state.signedUp = action.payload;
    },
  },
});

export const { login, logout, setFirstTimeLogin } = authReducer.actions;

export default authReducer.reducer;
