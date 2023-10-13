import React from "react";
import { StyleSheet } from "react-native";

import { useDispatch } from "react-redux";

import { getAuth, signOut } from "firebase/auth";
import { logout } from "../../redux/reducers/authReducer";
import Button from "../Button";

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
  const dispatch = useDispatch();
  const onPress = async () => {
    try {
      dispatch(logout());
      const auth = getAuth();
      await signOut(auth);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Button titleStyle={styles.buttonTitle} title="Log Out" onPress={onPress} />
  );
}

export default LogoutButton;
