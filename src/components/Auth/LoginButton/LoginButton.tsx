import React, { useState } from "react";
import { Text } from "react-native";

import Button from "../../Button";

import styles from "./LoginButton.style";

function LoginButton() {
  const [userInfo, setUserInfo] = useState(null);
  return (
    <>
      {userInfo ? (
        <Text style={styles.loggedInLabel}>Logged in: {userInfo.name}</Text>
      ) : (
        <Button
          titleStyle={styles.buttonTitle}
          title="Continue to Sign In"
          onPress={() => {
          }}
        />
      )}
    </>
  );
}

export default LoginButton;
