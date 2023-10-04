import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Need to be updated once google login screen is finalised
export default function firebaseInit() {
  const firebaseConfig: { [key: string]: string } = {
    apiKey: "AIzaSyBn23BYVmwbT495z9bHeZGBYo8BFvFL0e8",
    authDomain: "brain-exercise-initiative.firebaseapp.com",
    projectId: "brain-exercise-initiative",
    storageBucket: "brain-exercise-initiative.appspot.com",
    messagingSenderId: "233330185060",
    appId: "1:233330185060:web:78b791c94841270deba071",
    measurementId: "G-R26M2TPMGR",
  };

  try {
    const app = initializeApp(firebaseConfig);
    initializeAuth(app, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });
  } catch (err) {
    console.log(err);
  }
}
