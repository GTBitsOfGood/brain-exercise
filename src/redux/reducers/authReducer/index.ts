/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthUser } from "./types";
import { AdminApprovalStatus, Role } from "../../../types";

const initialState: AuthUser = {
  _id: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  startDate: "",
  birthDate: "",
  patientDetails: {
    secondaryContactName: "",
    secondaryContactPhone: "",
    additionalAffiliation: "",
  },
  adminDetails: {
    active: true,
  },
  chapter: "",
  location: {
    country: "",
    state: "",
    city: "",
  },
  signedUp: false,
  verified: false,
  approved: AdminApprovalStatus.PENDING,
  authenticated: false,
  role: Role.NONPROFIT_PATIENT,
};

// Helper function to copy all properties from newState over to the existing state
const setState = (state: AuthUser, newState: Partial<AuthUser>): AuthUser => {
  AsyncStorage.setItem("User", JSON.stringify(newState));
  state._id = newState._id ?? state._id;
  state.firstName = newState.firstName ?? state.firstName;
  state.lastName = newState.lastName ?? state.lastName;
  state.email = newState.email ?? state.email;
  state.phoneNumber = newState.phoneNumber ?? state.phoneNumber;
  state.startDate = newState.startDate ?? state.startDate;
  state.birthDate = newState.birthDate ?? state.birthDate;
  state.patientDetails = {
    secondaryContactName:
      newState.patientDetails?.secondaryContactName ??
      state.patientDetails.secondaryContactName,
    secondaryContactPhone:
      newState.patientDetails?.secondaryContactPhone ??
      state.patientDetails.secondaryContactPhone,
    additionalAffiliation:
      newState.patientDetails?.additionalAffiliation ??
      state.patientDetails.additionalAffiliation,
  };
  state.adminDetails = {
    active: newState.adminDetails?.active ?? state.adminDetails.active,
  };
  state.chapter = newState.chapter ?? state.chapter;
  state.location = {
    country: newState.location?.country ?? state.location.country,
    state: newState.location?.state ?? state.location.state,
    city: newState.location?.city ?? state.location.city,
  };
  state.signedUp =
    newState.signedUp === undefined ? state.signedUp : newState.signedUp;
  state.verified =
    newState.verified === undefined ? state.verified : newState.verified;
  state.approved = newState.approved ?? state.approved;
  state.role = newState.role ?? state.role;
  state.authenticated =
    newState.authenticated === undefined
      ? state.authenticated
      : newState.authenticated;
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
