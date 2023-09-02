/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUser } from "./types";

const initialState: AuthUser = {
  _id: "",
  name: "",
  phoneNumber: 0,
  birthdate: Date(),
  auth0AccessToken: "",
  authenticated: false,
  jwt: "",
  firstTimeLogin: false,
};

// Helper function to copy all properties from newState over to the existing state
const setState = (state: AuthUser, newState: AuthUser): void => {
  state._id = newState._id;
  state.name = newState.name;
  state.phoneNumber = newState.phoneNumber;
  state.birthdate = newState.birthdate;
  state.auth0AccessToken = newState.auth0AccessToken;
  state.authenticated = newState.authenticated;
  state.jwt = newState.jwt;
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
    firstTimeLogin(state, action: PayloadAction<boolean>) {
      state.firstTimeLogin = action.payload;
    },
  },
});

export const { login, logout, firstTimeLogin } = authReducer.actions;

export default authReducer.reducer;
