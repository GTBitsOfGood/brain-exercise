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
import { AuthUser } from "../../redux/reducers/authReducer/types";
import { UserAnalytics, HttpMethod, Role } from "../../types";
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
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateofBirth, setDateofBirth] = useState("");
  const [secondContactName, setSecondContactName] = useState("");
  const [secondContactNumber, setSecondContactNumber] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const isFormValid = () => {
    if (fullName.length === 0) {
      return false;
    }

    if (!/^\(\d{3}\)\s\d{3}-\d{4}/.test(phoneNumber)) {
      return false;
    }

    if (!/^\d{2}-\d{2}-\d{4}/.test(dateofBirth)) {
      return false;
    }

    if (secondContactName.length === 0) {
      return false;
    }

    if (!/^\(\d{3}\)\s\d{3}-\d{4}/.test(secondContactNumber)) {
      return false;
    }

    return true;
  };

  return (
    <View style={styles.root}>
      <ScrollView>
        <SafeAreaView>
          <View style={{ height: 80, paddingLeft: "3%", paddingTop: "2%" }}>
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
              paddingVertical: 5,
              paddingHorizontal: "3%",
              width: "100%",
            }}
          >
            <Text style={styles.textInputTitle}>Full Name</Text>
            <TextInput
              accessibilityRole="text"
              placeholder="Full Name"
              style={styles.textInput}
              onChangeText={setFullName}
              value={fullName}
            />

            <Text style={styles.textInputTitle}>Phone Number</Text>
            <TextInput
              accessibilityRole="text"
              placeholder="(XXX) XXX-XXXX"
              onChangeText={setPhoneNumber}
              style={styles.textInput}
              value={phoneNumber}
            />

            <Text style={styles.textInputTitle}>Date of Birth</Text>
            <TextInput
              accessibilityRole="text"
              placeholder="MM-DD-YYYY"
              onChangeText={setDateofBirth}
              style={styles.textInput}
              value={dateofBirth}
            />

            <Text style={styles.textInputTitle}>Secondary Contact Name</Text>
            <TextInput
              accessibilityRole="text"
              placeholder="Full Name"
              onChangeText={setSecondContactName}
              style={styles.textInput}
              value={secondContactName}
            />

            <Text style={styles.textInputTitle}>Secondary Contact Phone</Text>
            <TextInput
              accessibilityRole="text"
              placeholder="(XXX) XXX-XXXX"
              onChangeText={setSecondContactNumber}
              style={styles.textInput}
              value={secondContactNumber}
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
                const userObject: AuthUser = {
                  _id: userInfo.uid,
                  name: fullName,
                  email: userInfo.email,
                  phoneNumber,
                  authenticated: userInfo.emailVerified,
                  patientDetails: {
                    birthdate: dateofBirth,
                    secondaryContactName: secondContactName,
                    secondaryContactPhone: secondContactNumber,
                  },
                  signedUp: true,
                  role: Role.NONPROFIT_USER,
                };
                try {
                  const body: Record<string, string> = {
                    email: userObject.email,
                    name: userObject.name,
                    phoneNumber: userObject.phoneNumber,
                    birthDate: userObject.patientDetails.birthdate,
                    secondaryContactName:
                      userObject.patientDetails.secondaryContactName,
                    secondaryContactPhone:
                      userObject.patientDetails.secondaryContactPhone,
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
