import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  getRedirectResult,
} from "firebase/auth";

const provider = new GoogleAuthProvider();
export default async function GoogleSignIn() {
  console.log("signing in");

  const auth = getAuth();
  await signInWithPopup(auth, provider);

  try {
    const result = await getRedirectResult(auth);
    if (result) {
      // This is the signed-in user
      const { user } = result;
      // This gives you a Facebook Access Token.
      const credential = provider.credentialFromResult(auth, result);
      const token = credential.accessToken;
      return { user, token };
    }
  } catch (error) {
    // const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    return { error: errorMessage, credential };
  }
}
