import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
  Dimensions,
  TextInput,
  SafeAreaView,
  Pressable,
} from "react-native";
import PropTypes from "prop-types";
import StepIndicator from "react-native-step-indicator";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useFocusEffect } from "@react-navigation/native";
import { getStreak } from "../../scripts/progressbar-logic";
import { Input } from "react-native-elements";
import Text from "../../components/Text";
import { Button } from "react-native-elements";
import Option1 from "./Option1.jsx";
import Option2 from "./Option2.jsx";

//  Home Screen Navigation
function SignUpScreen({ navigation }) {
  // return option == 1 ? (
  return <Option1 navigation={navigation} />;
  // ) : (
  //   <Option2 navigation={navigation} />
  // );
}

SignUpScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SignUpScreen;
