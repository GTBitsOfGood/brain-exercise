import "react-native-gesture-handler";
import { View, Image, TouchableOpacity, Linking } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

import { useDispatch } from "react-redux";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Text from "../../components/Text";
import LoginButton from "../../components/Auth/LoginButton/LoginButton";
import styles from "./AuthGuard.styles";
import { AuthUser } from "../../redux/reducers/authReducer/types";
import { login } from "../../redux/reducers/authReducer";
import SignInScreen from "../SignIn/SignIn";
import NavigationContainerWithTracking from "../../components/NavigationContainerWithTracking";
import Stack from "../Stacks/StackNavigator";
import SignUpScreen from "../SignUp/SignUp";
import PersonalInfoScreen from "../SignUp/PersonalInfo";

const logo = require("../../assets/bei.jpg");

const youtubeChannelURL =
  "https://www.youtube.com/channel/UCDl_hKWzF26lNEg73FNVgtA";

type Props = { children: React.ReactNode };

function AuthGuard({ children }: Props) {
  const dispatch = useDispatch();
  const auth = getAuth();
  const [authenticated, setAuthenticated] = useState(false);
  onAuthStateChanged(auth, (user) => {
    // !! Should add code to get additional info from user from Analytics and check for Personal Info !!
    if (user) {
      AsyncStorage.getItem("User")
        .then((User) => JSON.parse(User))
        .then((User: AuthUser) => {
          if (User?.patientDetails.signedUp) {
            dispatch(login(User));
          }
          setAuthenticated(true);
        });
    } else {
      setAuthenticated(false);
    }
  });
  return (
    <>
      {authenticated ? (
        children
      ) : (
        <NavigationContainerWithTracking>
          <Stack.Navigator>
            <Stack.Screen
              key={"SignInScreen"}
              name={"SignInScreen"}
              component={SignInScreen}
              options={{
                title: "Sign In",
              }}
            />
            <Stack.Screen
              key={"SignUpScreen"}
              name={"SignUpScreen"}
              component={SignUpScreen}
              options={{
                title: "Sign Up",
              }}
            />
            <Stack.Screen
              key={"PersonalInfoScreen"}
              name={"PersonalInfoScreen"}
              component={PersonalInfoScreen}
              options={{
                title: "Personal Info",
              }}
            />
          </Stack.Navigator>
        </NavigationContainerWithTracking>
      )}
    </>
  );
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
