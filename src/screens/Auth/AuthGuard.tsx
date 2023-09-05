import "react-native-gesture-handler";
import { View, Image, TouchableOpacity, Linking } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

import Text from "../../components/Text";
import LoginButton from "../../components/Auth/LoginButton/LoginButton";
import styles from "./AuthGuard.styles";

const logo = require("../../assets/bei.jpg");

const youtubeChannelURL =
    "https://www.youtube.com/channel/UCDl_hKWzF26lNEg73FNVgtA";

type Props = { children: React.ReactNode };

function AuthGuard({ children }: Props) {
  return children;
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={logo} />
      <View>
        <Text style={styles.title}>Let&apos;s Get Started</Text>
        <LoginButton />
      </View>
      <View>
        <TouchableOpacity
          accessibilityRole="none"
          style={styles.squareButton}
          onPress={() => Linking.openURL(youtubeChannelURL)}
        >
          <FeatherIcon style={styles.icon} name="youtube" />
        </TouchableOpacity>
        <Text style={styles.squareButtonTitle}>{"Video"}</Text>
      </View>
    </View>
  );
}

export default AuthGuard;
