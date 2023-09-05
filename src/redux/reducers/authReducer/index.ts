/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { AuthUser } from "./types";

const initialState: AuthUser = {
  _id: "",
  name: "",
  phoneNumber: 0,
  birthdate: Date(),
  firstTimeLogin: false,
  authenticated: false,
  getIdToken: async () => GoogleSignin.getTokens().then(({ idToken }) => idToken),
};

// Helper function to copy all properties from newState over to the existing state
const setState = (state: AuthUser, newState: AuthUser): void => {
  state._id = newState._id;
  state.name = newState.name;
  state.phoneNumber = newState.phoneNumber;
  state.birthdate = newState.birthdate;
  state.firstTimeLogin = newState.firstTimeLogin;
  state.authenticated = newState.authenticated;
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
      state.firstTimeLogin = action.payload;
    },
  },
});

export const { login, logout, firstTimeLogin } = authReducer.actions;

export default authReducer.reducer;
