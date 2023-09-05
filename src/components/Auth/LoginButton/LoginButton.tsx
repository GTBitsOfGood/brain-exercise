/* eslint-disable no-console */
import React, { useEffect, useState, useCallback } from "react";
import { Text } from "react-native";
import Constants from "expo-constants";
import { useDispatch } from "react-redux";

// import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";

import axios from "axios";
import { login } from "../../../redux/reducers/authReducer/index";
import { logAxiosError } from "../../../utils";
import Button from "../../Button";

import styles from "./LoginButton.style";

// GoogleSignin.configure({
  // webClientId: "233330185060-882ehus1tj0beov35ciaiggnsvteposn.apps.googleusercontent.com",
// });

function LoginButton() {
  const [userInfo, setUserInfo] = useState(null);
  // const signIn = async () => {
    // try {
      // await GoogleSignin.hasPlayServices();
      // const user = await GoogleSignin.signIn();
      // 
    // } catch (error) {
      // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // console.log('Error code: SIGN_IN_CANCELLED');
        // user cancelled the login flow
      // } else if (error.code === statusCodes.IN_PROGRESS) {
        // console.log('Error code: IN_PROGRESS');
        // operation (e.g. sign in) is in progress already
      // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // console.log('Error code: PLAY_SERVICES_NOTAVAILABLE');
        // play services not available or outdated
      // } else {
        // some other error happened
        // console.log('Error code:', error.message);
      // }
    // }
  // }

  const logUser = async (user) => {
    const res = await fetch(
      `http://${Constants.expoConfig.extra.AXIOS_BASEURL}:3000/login/create`,
      {
        mode: "cors",
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      },
    );
  };

  const getUserInfo = useCallback(async (passedToken: string) => {
    try {
      const res = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${passedToken}` },
        },
      );

      const user = await res.json();
      logUser(user);
      setUserInfo(user);
    } catch (error) {
      console.error(error);
    }
  }, []);

  

  const dispatch = useDispatch();

  return (
    <>
      {userInfo ? (
        <Text style={styles.loggedInLabel}>Logged in: {userInfo.name}</Text>
      ) : (
        <Button
          titleStyle={styles.buttonTitle}
          title="Continue to Sign In"
          onPress={() => {
            // onPress()
            // signIn();
          }}
        />
      )}
    </>
  );
}

export default LoginButton;
