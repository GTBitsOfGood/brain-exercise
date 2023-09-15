/* eslint-disable import/no-extraneous-dependencies */
import {initializeApp} from "firebase/app"

// Need to be updated once google login screen is finalised
export default function firebaseInit() {
  console.log("Initialising firebase");
  const firebaseConfig: { [key: string]: string } = {
    apiKey: "YOUR_KEY_HERE_AIzaSyAOWH",
    authDomain: "your-auth-domain-b1234.firebaseapp.com",
    databaseURL: "https://your-database-name.firebaseio.com",
    projectId: "your-project-id-1234",
    storageBucket: "your-project-id-1234.appspot.com",
    messagingSenderId: "12345-insert-yourse",
    appId: "insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce",
  };

  initializeApp(firebaseConfig);
}
