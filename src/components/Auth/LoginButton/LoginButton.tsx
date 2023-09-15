import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import Button from "../../Button";
import authReducer from "../../../redux/reducers/authReducer";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";

import styles from "./LoginButton.style";
import { AuthUser } from "../../../redux/reducers/authReducer/types";

function LoginButton({ navigation }) {
  const userInfo: AuthUser|any = useSelector<RootState>((state) => state.auth);
  useEffect(() => {
    console.log("At login button reducer value", userInfo)
  }, []);
  return (
    <>
      {userInfo && userInfo.patientDetails.signedUp? (
        <Text style={styles.loggedInLabel}>Logged in: {userInfo.email}</Text>
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
