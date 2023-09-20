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
    signedUp: false,
    secondaryContactName: "",
    secondaryContactPhone: "",
  },
  authenticated: false,
  role: Role.NONPROFIT_USER,
};

// Helper function to copy all properties from newState over to the existing state
const setState = (state: AuthUser, newState: AuthUser): void => {
  AsyncStorage.setItem("User", JSON.stringify(newState));
  state._id = newState._id;
  state.name = newState.name;
  state.email = newState.email;
  state.phoneNumber = newState.phoneNumber;
  state.patientDetails = {
    birthdate: newState.patientDetails.birthdate,
    signedUp: newState.patientDetails.signedUp,
    secondaryContactName: newState.patientDetails.secondaryContactName,
    secondaryContactPhone: newState.patientDetails.secondaryContactPhone,
  };
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
      AsyncStorage.removeItem("User");
    },
    setFirstTimeLogin(state, action: PayloadAction<boolean>) {
      state.patientDetails.signedUp = action.payload;
      AsyncStorage.getItem("User")
        .then((user) => JSON.parse(user))
        .then((user: AuthUser) => {
          user.patientDetails.signedUp = action.payload;
          AsyncStorage.setItem("User", JSON.stringify(user));
        });
    },
  },
});

export const { login, logout, setFirstTimeLogin } = authReducer.actions;

export default authReducer.reducer;
