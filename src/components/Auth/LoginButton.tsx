import * as AuthSession from "expo-auth-session";
import React, { useEffect } from "react";
import { Alert, Dimensions, Platform, StyleSheet, View } from "react-native";

import { useDispatch } from "react-redux";

import jwtDecode from "jwt-decode";
import axios, { AxiosError } from "axios";
import * as Auth0 from "../../constants/Auth0";

import { login } from "../../redux/reducers/authReducer/index";
import { setLoading } from "../../redux/reducers/loadingReducer/index";
import { decodedJwtToken } from "../../types";
import { logAxiosError } from "../../utils";
import Button from "../../components/Button";
import { useAuth0 } from "react-native-auth0";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

const styles = StyleSheet.create({
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
  const { authorize, user } = useAuth0();

  const onPress = async () => {
    try {
      console.log(user);
      await authorize();
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };
  const dispatch = useDispatch();

  const { onUserNotFound } = props;

  const [, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: Auth0.auth0ClientId,
      // id_token will return a JWT token
      responseType: "id_token",
      // retrieve the user's profile
      scopes: ["openid", "profile"],
      extraParams: {
        // ideally, this will be a random value
        nonce: "nonce",
      },
    },
    { authorizationEndpoint: Auth0.authorizationEndpoint }
  );

  useEffect(() => {
    if (result) {
      if (result.type === "success") {
        // Retrieve the JWT access token from Auth0 and decode it
        const receivedToken = result.params.id_token;
        const userInfo: decodedJwtToken = jwtDecode(receivedToken);

        // TODO: Refactor to move jwt to secure store! HERE!

        // here for testing purposes. Change to the following if want authentication.
        // But better to use expo-secure to store jwt token rather than redux state
        // https://docs.expo.dev/versions/latest/sdk/securestore/
        // console.log(userInfo.sub);
        // axios.post(`/login/${userInfo.sub}`, {}, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //     Authorization: `Bearer ${receivedToken}`
        //   }
        // })

        dispatch(setLoading({ loading: true }));

        // Now that we have the user access token we can request the user information from the backend
        axios
          .post(`/login/${userInfo.sub}`, {})
          .then((res) => {
            const loginResponse = res;

            if (
              loginResponse.status === 200 &&
              loginResponse.data !== null &&
              loginResponse.data !== undefined &&
              loginResponse.data.user !== null
            ) {
              const { user } = loginResponse.data; // res.data.user is of type User
              user.jwt = receivedToken; // add jwt and authenticated to make it an AuthUser
              user.authenticated = true;
              Alert.alert("Welcome, " + user.name + "!");
              return dispatch(login(user));
            } else {
              return Alert.alert("Authentication error!");
            }
          })
          .catch((err: AxiosError) => {
            // We actually expect an AxiosError with response code 303 if the user could not be located in
            // the database. In this case we should redirect to onboarding to sign up this new user.
            if (
              err.response !== null &&
              err.response !== undefined &&
              err.response?.status === 303
            ) {
              // The name and jwt will be useful during onboarding even though we don't have any more user info

              // TODO: ADD ONBOARDING DISPATCH LOGIC HERE!

              // const onboardingUser: BeginOnboardingUser = {
              //   name: `${userInfo.given_name} ${userInfo.family_name}`,
              //   auth0AccessToken: userInfo.sub,
              //   email: userInfo.nickname, // nickname field is email.  Had to make this change because otherwise users with same name could not both have accounts
              //   jwt: receivedToken,
              // };
              Alert.alert(
                "User does not exist (we should implement some sort of onboarding logic here!)"
              );
              return onUserNotFound();
            } else {
              // In this case it was actually an unexpected error
              return Alert.alert(
                "Authentication error! Please Try Again Later"
              );
            }
          })
          .finally(() => {
            dispatch(setLoading({ loading: false }));
          });
      } else {
        Alert.alert("Authentication error!");
      }
    }
  }, [result]);

  return (
    <Button
      titleStyle={styles.buttonTitle}
      title="Continue to Sign In"
      onPress={onPress}
    />
  );
}

export default LoginButton;
