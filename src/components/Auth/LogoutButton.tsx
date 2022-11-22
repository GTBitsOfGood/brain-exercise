import * as AuthSession from "expo-auth-session";
import React, { useEffect } from "react";
import { Platform, StyleSheet } from "react-native";

import { useDispatch } from "react-redux";

import * as Auth0 from "../../constants/Auth0";

import { logout } from "../../redux/reducers/authReducer";
import { setLoading } from "../../redux/reducers/loadingReducer/index";
import Button from "../Button";
import { useAuth0, Auth0Provider } from "react-native-auth0";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

const styles = StyleSheet.create({
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
});

function LogoutButton() {
  const { clearSession, user } = useAuth0();

  const onPress = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log(e);
    }
  };
  const dispatch = useDispatch();

  const [, logoutResult, promptAsyncLogout] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: Auth0.auth0ClientId,
    },
    { authorizationEndpoint: Auth0.logoutEndpoint }
  );

  useEffect(() => {
    if (logoutResult) {
      dispatch(setLoading({ loading: true }));
      // Although logout functionality works, it receives an error from Auth0,
      // so we only check for canceling logout rather than successful logout
      if (logoutResult.type !== "cancel") {
        dispatch(logout());
      }
      dispatch(setLoading({ loading: false }));
    }
  }, [logoutResult]);

  return (
    <Button titleStyle={styles.buttonTitle} title="Log Out" onPress={onPress} />
  );
}

export default LogoutButton;
