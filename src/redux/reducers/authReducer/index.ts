/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthUser } from "./types";
import { Role } from "../../../types";

const initialState: AuthUser = {
  _id: "",
  name: "",
  email: "",
  phoneNumber: "",
  patientDetails: {
    birthdate: Date(),
    secondaryContactName: "",
    secondaryContactPhone: "",
  },
  signedUp: false,
  authenticated: false,
  role: Role.NONPROFIT_USER,
};

// Helper function to copy all properties from newState over to the existing state
const setState = (state: AuthUser, newState: Partial<AuthUser>): AuthUser => {
  AsyncStorage.setItem("User", JSON.stringify(newState));
  state._id = newState._id ?? state._id;
  state.name = newState.name ?? state.name;
  state.email = newState.email ?? state.email;
  state.phoneNumber = newState.phoneNumber ?? state.phoneNumber;
  state.patientDetails = {
    birthdate:
      newState.patientDetails?.birthdate ?? state.patientDetails.birthdate,
    secondaryContactName:
      newState.patientDetails?.secondaryContactName ??
      state.patientDetails.secondaryContactName,
    secondaryContactPhone:
      newState.patientDetails?.secondaryContactPhone ??
      state.patientDetails.secondaryContactPhone,
  };
  state.signedUp =
    newState.signedUp === undefined ? state.signedUp : newState.signedUp;
  state.authenticated =
    newState.authenticated === undefined
      ? state.authenticated
      : newState.authenticated;
  state.role = newState.role ?? state.role;
  return state;
};

const authReducer = createSlice({
  name: "authInfo",
  initialState,
  reducers: {
    // Update the authState with the user information
    login(state, action: PayloadAction<Partial<AuthUser>>) {
      const newUser = setState(state, action.payload);
      AsyncStorage.setItem("User", JSON.stringify(newUser));
    },
    // Clear the authState
    logout(state) {
      setState(state, initialState);
      AsyncStorage.removeItem("User");
    },
    setFirstTimeLogin(state, action: PayloadAction<boolean>) {
      state.signedUp = action.payload;
      AsyncStorage.getItem("User")
        .then((user) => JSON.parse(user) as AuthUser)
        .then((user: AuthUser) => {
          user.signedUp = action.payload;
          AsyncStorage.setItem("User", JSON.stringify(user));
        });
    },
  },
});

export const { login, logout, setFirstTimeLogin } = authReducer.actions;

export default authReducer.reducer;
