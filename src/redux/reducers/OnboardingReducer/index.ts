import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OnboardingState, BeginOnboardingUser } from './types';

const initialState = {
  name: '',
  email: '',
  phoneNumber: 0,
  secondaryName: '',
  secondaryPhoneNumber: 0,
  auth0AccessToken: '',
  jwt: '',
} as OnboardingState;

const onboardingReducer = createSlice({
  name: 'onboardingState',
  initialState,
  reducers: {
    beginOnboarding(state, action: PayloadAction<BeginOnboardingUser>) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.auth0AccessToken = action.payload.auth0AccessToken;
      state.jwt = action.payload.jwt;
    },
    reset: () => initialState,
  }
});

// make sure to add your reducer to the root reducer and store
export default onboardingReducer.reducer;

export const { reset, beginOnboarding } = onboardingReducer.actions;