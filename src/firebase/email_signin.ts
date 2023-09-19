import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";

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
async function emailSignIn(email: string, password: string): Promise<User> {
  const auth = getAuth();
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );
  // Signed in
  return userCredential.user;
}

export { emailSignUp, emailSignIn };
