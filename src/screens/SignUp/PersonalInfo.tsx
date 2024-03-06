import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Platform,
  Dimensions,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import { getAuth } from "firebase/auth";

import Text from "../../components/Text";
import { UserAnalytics, HttpMethod } from "../../types";
import { login } from "../../redux/reducers/authReducer";
import { internalRequest } from "../../requests";

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
    height:
      Platform.OS === "ios" && Platform.isPad
        ? 200
        : Dimensions.get("window").height * 0.1,
  },
  textInput: {
    height: 55,
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

//  Home Screen Navigation
function PersonalInfoScreen() {
  const auth = getAuth();
  const userInfo = auth.currentUser;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateofBirth, setDateofBirth] = useState("");
  const [secondContactName, setSecondContactName] = useState("");
  const [secondContactNumber, setSecondContactNumber] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const isFormValid = () => {
    if (firstName.length === 0) {
      return false;
    }

    if (lastName.length === 0) {
      return false;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      return false;
    }

    if (!/^\d{2}-\d{2}-\d{4}/.test(dateofBirth)) {
      return false;
    }

    if (secondContactName.length === 0) {
      return false;
    }

    if (!/^\d{10}$/.test(secondContactNumber)) {
      return false;
    }

    // Following check if the date matches number of days in a month

    const checkDate = new Date(dateofBirth);
    if (checkDate.toString() === "Invalid Date") {
      return false;
    }

    const today = new Date();
    if (checkDate >= today) {
      return false;
    }

    return true;
  };

  const formatPhoneNumber = (currentNumber: string) => {
    const digitsOnly = currentNumber.replace(/\D/g, "");

    if (digitsOnly.length < 3) {
      return digitsOnly;
    }
    if (digitsOnly.length < 6) {
      return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`;
    }
    return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(
      3,
      6,
    )}-${digitsOnly.slice(6)}`;
  };

  const handlePhoneNumberChange = (
    input: string,
    setNumber: (changeNumber: string) => void,
    currentNumber: string,
  ) => {
    const inputDigitsOnly = input.replace(/[()\-\s]/g, "");
    const phoneNumberDigitsOnly = currentNumber.replace(/\D/g, "");

    if (inputDigitsOnly.length <= phoneNumberDigitsOnly.length) {
      // there was a backspace
      setNumber(phoneNumberDigitsOnly.slice(0, -1));
    } else {
      setNumber(inputDigitsOnly);
    }
  };

  const formatDOB = (input: string) => {
    const digitsOnly = input.replace(/-/g, "");
    if (digitsOnly.length <= 2) {
      return digitsOnly;
    }
    if (digitsOnly.length <= 4) {
      return `${digitsOnly.slice(0, 2)}-${digitsOnly.slice(2)}`;
    }
    return `${digitsOnly.slice(0, 2)}-${digitsOnly.slice(
      2,
      4,
    )}-${digitsOnly.slice(4)}`;
  };

  const handleDOBChange = (input: string) => {
    const cleanInput = input.replace(/\./g, "");
    let digitsOnlyDOB = dateofBirth.replace(/-/g, "");
    if (cleanInput.length < dateofBirth.length) {
      // backspace
      digitsOnlyDOB = digitsOnlyDOB.slice(0, -1);
      setDateofBirth(formatDOB(digitsOnlyDOB));
    } else {
      setDateofBirth(formatDOB(cleanInput));
    }
  };

  return (
    <View style={styles.root}>
      <ScrollView>
        <SafeAreaView>
          <View style={{ paddingLeft: "3%", paddingTop: "15%" }}>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, color: "#4A4B57" }}
            >
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
              paddingTop: "5%",
              paddingHorizontal: "3%",
              width: "100%",
            }}
          >
            <Text style={styles.textInputTitle}>First Name*</Text>
            <TextInput
              accessibilityRole="text"
              placeholder="First Name"
              style={styles.textInput}
              onChangeText={setFirstName}
              value={firstName}
            />

            <Text style={styles.textInputTitle}>Last Name*</Text>
            <TextInput
              accessibilityRole="text"
              placeholder="Last Name"
              style={styles.textInput}
              onChangeText={setLastName}
              value={lastName}
            />

            <Text style={styles.textInputTitle}>Phone Number*</Text>
            <TextInput
              accessibilityRole="text"
              placeholder="(XXX) XXX-XXXX"
              onChangeText={(input) =>
                handlePhoneNumberChange(input, setPhoneNumber, phoneNumber)
              }
              style={styles.textInput}
              value={formatPhoneNumber(phoneNumber)}
              textContentType="telephoneNumber"
              keyboardType="numeric"
              maxLength={14}
            />

            <Text style={styles.textInputTitle}>Date of Birth*</Text>
            <TextInput
              accessibilityRole="text"
              placeholder="MM-DD-YYYY"
              onChangeText={(input) => handleDOBChange(input)}
              style={styles.textInput}
              value={dateofBirth}
              keyboardType="numeric"
              maxLength={10}
            />

            <Text style={styles.textInputTitle}>Secondary Contact Name*</Text>
            <TextInput
              accessibilityRole="text"
              placeholder="Full Name"
              onChangeText={setSecondContactName}
              style={styles.textInput}
              value={secondContactName}
            />

            <Text style={styles.textInputTitle}>Secondary Contact Phone*</Text>
            <TextInput
              accessibilityRole="text"
              placeholder="(XXX) XXX-XXXX"
              onChangeText={(input) =>
                handlePhoneNumberChange(
                  input,
                  setSecondContactNumber,
                  secondContactNumber,
                )
              }
              style={styles.textInput}
              textContentType="telephoneNumber"
              value={formatPhoneNumber(secondContactNumber)}
              keyboardType="numeric"
              maxLength={14}
            />
            <Text style={styles.errorTitle}>{error}</Text>
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
                setError("");
                try {
                  const body: Record<string, string> = {
                    email: userInfo.email,
                    firstName,
                    lastName,
                    phoneNumber,
                    birthDate: dateofBirth,
                    secondaryContactName: secondContactName,
                    secondaryContactPhone: secondContactNumber,
                  };
                  const res = await internalRequest<UserAnalytics>({
                    url: "/api/patient/auth/signup",
                    body,
                    method: HttpMethod.POST,
                  });
                  dispatch(login(res));
                } catch (e) {
                  setError(`An error occured\n${e}`);
                }
              }}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

export default PersonalInfoScreen;
