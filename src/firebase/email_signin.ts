import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { internalRequest } from "../requests";
import { Analytics, HttpMethod, Role, User } from "../types";
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

async function getAnalytics(): Promise<Analytics> {
  return internalRequest<Analytics>({
    method: HttpMethod.GET,
    url: patientUrl,
    authRequired: true,
  });
}

async function emailSignIn(
  email: string,
  password: string,
): Promise<{ user: User; gameDetails: GameDetails }> {
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password);
  const userAnalytics = await getAnalytics();
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
