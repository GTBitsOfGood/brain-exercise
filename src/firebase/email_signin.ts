import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { internalRequest } from "../requests";
import { UserAnalytics, HttpMethod, IUser } from "../types";
import { GameDetails } from "../redux/reducers/gameDetailsReducer/types";

const patientUrl = "api/patient/auth/login";
async function emailSignUp(email: string, password: string) {
  const auth = getAuth();
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );
  // Signed in
  const { user } = userCredential;
  return user;
  // ...
}

async function getUserAnalytics(): Promise<UserAnalytics> {
  return internalRequest<UserAnalytics>({
    method: HttpMethod.GET,
    url: patientUrl,
    authRequired: true,
  });
}

async function emailSignIn(
  email: string,
  password: string,
): Promise<{ user: IUser; gameDetails: GameDetails }> {
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password);
  const userAnalytics = await getUserAnalytics();
  return {
    user: userAnalytics.user,
    gameDetails: userAnalytics.gameDetails,
  };
}

export { emailSignUp, emailSignIn, getUserAnalytics };
