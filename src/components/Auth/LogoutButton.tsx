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

type Props = {
  closeModal: () => void;
};

export default function LogoutButton({ closeModal }: Props) {
  const dispatch = useDispatch();
  const onPress = async () => {
    try {
      closeModal();
      const auth = getAuth();
      await signOut(auth);
      dispatch(logout());
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Button
      titleStyle={styles.buttonTitle}
      title="Log Out"
      onPress={onPress}
      color="#008AFC"
      adjustedSize={250}
    />
  );
}
