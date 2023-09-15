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
import { TypedNavigator, useFocusEffect } from "@react-navigation/native";
import { getStreak } from "../../scripts/progressbar-logic";
import { Input } from "react-native-elements";
import Text from "../../components/Text";
import { Button } from "react-native-elements";
import { AuthUser } from "../../redux/reducers/authReducer/types";
import { User } from "firebase/auth";
import { Role } from "../../types";
import axios, { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/authReducer";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "flex-start",
    padding: "5%",
    backgroundColor: "white",
    flexDirection: "column",
    width: "100%",
  },
  title: {
    fontSize: 34,
    textAlign: "center",
    marginVertical: 8,
    color: "#4A4B57",
  },
  buttonTitle: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  squareButtonTitle: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "400",
  },
  image: {
    width: 100,
    height: Platform.isPad ? 200 : Dimensions.get("window").height * 0.1,
  },
  textInput: {
    height: "15%",
    width: "100%",
    marginBottom: "5%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#4A4B57",
    padding: "2%",
  },
  textInputTitle: {
    color: "#4A4B57",
    fontSize: 14,
  },
  errorTitle: {
    color: "#ed0707",
    fontSize: 14,
  },
});

const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 8,
  separatorStrokeUnfinishedWidth: 8,
  separatorStrokeFinishedWidth: 8,
  stepStrokeWidth: 0,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: "#005AA3",
  stepStrokeFinishedColor: "#005AA3",
  stepStrokeUnfinishedColor: "#005AA3",
  separatorFinishedColor: "#005AA3",
  separatorUnFinishedColor: "#dbdbdb",
  stepIndicatorFinishedColor: "#005AA3",
  stepIndicatorUnFinishedColor: "#dbdbdb",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: "#000000",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnfinishedColor: "#000000",
};

const logo = require("../../assets/bei.jpg");

//  Home Screen Navigation
function PersonalInfoScreen({ navigation, route }) {
  const { userInfo } = route.params;
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateofBirth, setDateofBirth] = useState("");
  const [secondContactName, setSecondContactName] = useState("");
  const [secondContactNumber, setSecondContactNumber] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  console.log(userInfo)

  const isFormValid = () => {
    if (fullName.length == 0) {
      return false;
    }

    if (!/^\d{2}-\d{2}-\d{4}/.test(dateofBirth)) {
      return false;
    }

    if (secondContactName.length == 0) {
      return false;
    }

    if (!/^\(\d{3}\)\s\d{3}-\d{4}/.test(secondContactNumber)) {
      return false;
    }

    return true;
  };

  return (
    <View style={styles.root}>
      <View style={{ flex: 1, paddingLeft: "3%", paddingTop: "2%" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#4A4B57" }}>
          Tell Us About Yourself!
        </Text>
        <Text style={{ fontSize: 16 }}>
          Reason on why they need to collect this information. Probably a
          sentence or two.
        </Text>
      </View>
      <View
        style={{
          flex: 4,
          maxHeight: 600,
          marginBottom: 100,
          paddingVertical: "5%",
          paddingHorizontal: "3%",
          width: "100%",
        }}
      >
        <SafeAreaView>
          <Text style={styles.textInputTitle}>Full Name</Text>
          <TextInput
            placeholder="Full Name"
            style={styles.textInput}
            onChangeText={setFullName}
            value={fullName}
          />

          <Text style={styles.textInputTitle}>Phone Number</Text>
          <TextInput
            placeholder="(XXX) XXX-XXXX"
            onChangeText={setPhoneNumber}
            style={styles.textInput}
            value={phoneNumber}
          />

          <Text style={styles.textInputTitle}>Date of Birth</Text>
          <TextInput
            placeholder="MM-DD-YYYY"
            onChangeText={setDateofBirth}
            style={styles.textInput}
            value={dateofBirth}
          />

          <Text style={styles.textInputTitle}>Secondary Contact Name</Text>
          <TextInput
            placeholder="Full Name"
            onChangeText={setSecondContactName}
            style={styles.textInput}
            value={secondContactName}
          />

          <Text style={styles.textInputTitle}>Secondary Contact Phone</Text>
          <TextInput
            placeholder="(XXX) XXX-XXXX"
            onChangeText={setSecondContactNumber}
            style={styles.textInput}
            value={secondContactNumber}
          />
          <Text style={styles.errorTitle}>{error}</Text>
        </SafeAreaView>
      </View>

      <View
        style={{
          flex: 1,
          alignSelf: "center",
          paddingHorizontal: "3%",
          margin: 0,
        }}
      >
        <Button
          containerStyle={{
            width: 0.85 * Dimensions.get("window").width,
            padding: "1%",
          }}
          buttonStyle={{
            backgroundColor: "#005AA3",
            borderRadius: 4,
            height: 0.13 * Dimensions.get("window").width,
          }}
          titleStyle={styles.buttonTitle}
          title="Start"
          disabled={!isFormValid()}
          onPress={async () => {
            console.log(userInfo)
            setError("")
            let userObject: AuthUser = {
              _id: userInfo.uid,
              name: fullName,
              email: userInfo.email,
              phoneNumber,
              authenticated: userInfo.emailVerified,
              patientDetails: {
                signedUp: true,
                birthdate: dateofBirth,
                secondaryContactName: secondContactName,
                secondaryContactPhone: secondContactNumber
              },
              role: Role.NONPROFIT_USER
            }
            try {
              // !! Uncomment when the api endpoint is implemented !!
              
              // await axios.post('/api/patient/auth/signUp', {
              //   email: userObject.email,
              //   name: userObject.name,
              //   phoneNumber: userObject.phoneNumber,
              //   birthDate: userObject.patientDetails.birthdate,
              //   secondaryContactName: userObject.patientDetails.secondaryContactName,
              //   secondaryContactPhone: userObject.patientDetails.secondaryContactPhone
              // });
              dispatch(login(userObject));
              navigation.navigate("HomeScreen");
            } catch (e) {
              setError("An error occured\n" + e)
            }
          }}
        />
      </View>
    </View>
  );
}

PersonalInfoScreen.propTypes = {
  navigation: PropTypes.object,
};

export default PersonalInfoScreen;
