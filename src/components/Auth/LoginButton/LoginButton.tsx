import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import GoogleSignIn from "../../../firebase/google_signin";
import Button from "../../Button";
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as Auth0 from "../../../constants/Auth0";

import styles from "./LoginButton.style";

WebBrowser.maybeCompleteAuthSession();
// Endpoint
// {
//       expoClientId: "564342114628-ab34cu2f4lrbjt334nb7r9ktpna1a4le.apps.googleusercontent.com",
//       androidClientId: "564342114628-o9vv6s43n6a3qi443lfd8tvbuleup3g0.apps.googleusercontent.com"
//     }
function LoginButton({ navigation }) {
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '564342114628-o9vv6s43n6a3qi443lfd8tvbuleup3g0.apps.googleusercontent.com',
      redirectUri: "exp://192.168.21.1:8081"
    },
  );
  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
    }
    console.log("request", request);
    console.log("response", response);
  }, [response]);
  return (
    <>
      {userInfo ? (
        <Text style={styles.loggedInLabel}>Logged in: {userInfo.name}</Text>
      ) : (
        <Button
          titleStyle={styles.buttonTitle}
          title="Continue to Sign In"
          onPress={() => {
             navigation.navigate("SignUpScreen")
          }}
        />
      )}
    </>
  );
}

export default LoginButton;
