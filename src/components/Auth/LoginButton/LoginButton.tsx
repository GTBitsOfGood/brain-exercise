import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import Button from "../../Button";
import { RootState } from "../../../redux/rootReducer";

import styles from "./LoginButton.style";
import { AuthUser } from "../../../redux/reducers/authReducer/types";

function LoginButton({ navigation }) {
  const userInfo = useSelector<RootState>((state) => state.auth) as AuthUser;
  return (
    <>
      {userInfo && userInfo.signedUp ? (
        <Text style={styles.loggedInLabel}>Logged in: {userInfo.email}</Text>
      ) : (
        <Button
          titleStyle={styles.buttonTitle}
          title="Continue to Sign In"
          onPress={() => {
            navigation.navigate("SignUpScreen");
          }}
        />
      )}
    </>
  );
}

export default LoginButton;
