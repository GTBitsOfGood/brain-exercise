import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import axios, { AxiosResponse } from "axios";
import { internalRequest } from "../requests";
import { Analytics, HttpMethod, Role, User } from "../types";
import { GameDetails } from "../redux/reducers/gameDetailsReducer/types";

const patientUrl = "api/patient/auth/login";
async function emailSignUp(email: string, password: string) {
  const auth = getAuth();
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  // Signed in
  const { user } = userCredential;
  return user;
  // ...
}

async function getAnalytics(email: string): Promise<Analytics> {
  return internalRequest<Analytics>({
    method: HttpMethod.GET,
    url: patientUrl,
    queryParams: { email },
  });
}

async function emailSignIn(
  email: string,
  password: string
): Promise<{ user: User; gameDetails: GameDetails }> {
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password);
  console.debug("Signed  into firebase");
  const userAnalytics = await getAnalytics(email);
  console.debug("Signed  into analytics: ", userAnalytics);
  return {
    user: {
      _id: userAnalytics.user._id,
      name: userAnalytics.user.name,
      email: userAnalytics.user.email,
      phoneNumber: userAnalytics.user.phoneNumber,
      patientDetails: userAnalytics.user.patientDetails,
      signedUp: userAnalytics.user.signedUp,
      role: Role.NONPROFIT_USER,
    },
    gameDetails: userAnalytics.gameDetails,
  };
}

export { emailSignUp, emailSignIn, getAnalytics };
