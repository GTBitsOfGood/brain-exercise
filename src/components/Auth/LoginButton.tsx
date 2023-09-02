import * as AuthSession from "expo-auth-session";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";
import * as Google from "expo-auth-session/providers/google";

import { useDispatch } from "react-redux";

import jwtDecode from "jwt-decode";
import axios, { AxiosError } from "axios";
import * as Auth0 from "../../constants/Auth0";

import { login } from "../../redux/reducers/authReducer/index";
import { setLoading } from "../../redux/reducers/loadingReducer/index";
import { DecodedJwtToken } from "../../types";
import { logAxiosError } from "../../utils";
import Button from "../../components/Button";
import { useAuth0 } from "react-native-auth0";
import { beginOnboarding } from "../../redux/reducers/OnboardingReducer";
import { BeginOnboardingUser } from "../../redux/reducers/OnboardingReducer/types";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

WebBrowser.maybeCompleteAuthSession();

const styles = StyleSheet.create({
  loggedInLabel: {
    textAlign: "center",
    fontSize: 20,
  },
  root: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 34,
    textAlign: "center",
    marginVertical: 8,
    color: "#4A4B57",
  },
  squareButton: {
    width: Platform.isPad ? 150 : 99,
    height: Platform.isPad ? 150 : 99,
    backgroundColor: "white",
    borderColor: "#005AA3",
    borderWidth: 5,
    borderRadius: 25,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "stretch",
  },
  buttonTitle: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  squareButtonTitle: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "400",
  },
  imageContainer: {
    flex: 2,
    width: "100%",
    height: 150,
    borderRadius: 2,
    flexDirection: "column",
    padding: 8,
  },
  image: {
    alignSelf: "center",
    width: Dimensions.get("window").width - 50,
    height: Platform.isPad ? 400 : Dimensions.get("window").height * 0.2,
    resizeMode: "contain",
  },
});

function LoginButton(props: { onUserNotFound: () => void }) {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "1021563384726-gau4bvagu7r392i5u9qa9pd5oobmvvvo.apps.googleusercontent.com",
    iosClientId:
      "1021563384726-gau4bvagu7r392i5u9qa9pd5oobmvvvo.apps.googleusercontent.com",
    clientId:
      "1021563384726-gau4bvagu7r392i5u9qa9pd5oobmvvvo.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo(response.authentication.accessToken);
    }
  }, [response, token]);

  const getUserInfo = async (passedToken: string) => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${passedToken}` },
        }
      );

      const user = await response.json();
      logUser(user);
      setUserInfo(user);
    } catch (error) {
      console.error(error);
    }
  };

  const logUser = async (user) => {
    const response = await fetch(
      `http://${Constants.expoConfig.extra.AXIOS_BASEURL}:3000/login/create`,
      {
        mode: "cors",
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      }
    );
  };

  const dispatch = useDispatch();

  const { onUserNotFound } = props;

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
            promptAsync();
          }}
        />
      )}
    </>
  );
}

export default LoginButton;
