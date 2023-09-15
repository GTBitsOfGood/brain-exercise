import "react-native-gesture-handler";
import { View, Image, TouchableOpacity, Linking } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Text from "../../components/Text";
import LoginButton from "../../components/Auth/LoginButton/LoginButton";
import styles from "./AuthGuard.styles";
import useAsyncStorage from "../../hooks/useAsyncStorage";
import { AuthUser } from "../../redux/reducers/authReducer/types";
import { login } from "../../redux/reducers/authReducer";
import { Role } from "../../types";
import storage from "redux-persist/lib/storage";

const logo = require("../../assets/bei.jpg");

const youtubeChannelURL =
  "https://www.youtube.com/channel/UCDl_hKWzF26lNEg73FNVgtA";

type Props = { children: React.ReactNode };

function AuthGuard({ children }: Props) {
  const { storageValue } = useAsyncStorage<AuthUser>("LOGGEDINUSER");
  const dispatch = useDispatch();
  
  useEffect(()=>{
    console.log("Storage value", storageValue)
    if (storageValue?.patientDetails.signedUp) {
      dispatch(login(storageValue));
    }
    // dispatch(
    //   login({
    //     _id: "",
    //     name: "",
    //     email: "",
    //     phoneNumber: "", 
    //     patientDetails: {
    //       birthdate: Date(),
    //       signedUp: false,
    //       secondaryContactName: "",
    //       secondaryContactPhone: "",
    //     },
    //     authenticated: false,
    //     role: Role.NONPROFIT_USER,
    //   })
    // );
  }, [storageValue])
  return <>{children}</>;
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={logo} />
      <View>
        <Text style={styles.title}>Let&apos;s Get Started</Text>
        <LoginButton />
      </View>
      <View>
        <TouchableOpacity
          accessibilityRole='none'
          style={styles.squareButton}
          onPress={() => Linking.openURL(youtubeChannelURL)}
        >
          <FeatherIcon style={styles.icon} name='youtube' />
        </TouchableOpacity>
        <Text style={styles.squareButtonTitle}>{"Video"}</Text>
      </View>
    </View>
  );
}

export default AuthGuard;
