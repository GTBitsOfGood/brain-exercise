export interface OnboardingState {
  name: string;
  email: string;
  phoneNumber: number;
  secondaryName: string;
  secondaryPhoneNumber: number;
  auth0AccessToken: string;
  jwt: string;
}

export type BeginOnboardingUser = {
  jwt: string;
  auth0AccessToken: string;
  name: string;
  email: string;
};
