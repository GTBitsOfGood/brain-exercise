import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Platform,
  Dimensions,
  TextInput,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import { AVPlaybackSource } from "expo-av";
import { Button } from "react-native-elements";
import { Dropdown } from "react-native-element-dropdown";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FirebaseError } from "firebase/app";

import Text from "../../components/Text";
import { emailSignUp } from "../../firebase/email_signin";
import { RootStackParamList } from "../../types";
// import { getAllChapters } from "../../actions/Chapter";

// Add this state to your component

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
    paddingTop: "2%",
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

const logo = require("../../assets/bei.jpg") as AVPlaybackSource;

type Props = NativeStackScreenProps<RootStackParamList, "SignUpScreen">;

//  Home Screen Navigation
function SignUpScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  // const [chapters, setChapters] = useState<{ label: string; value: string }[]>(
  //   [],
  // );

  const CHAPTERS = [
    "Arizona State University",
    "Augusta University",
    "Carnegie Mellon",
    "Case Western Reserve University",
    "Chaminade University of Honolulu",
    "Claremont Colleges",
    "Colorado School of Mines",
    "Columbia University",
    "Cornell University",
    "CSU Long Beach",
    "Dalhousie University",
    "Duke University",
    "Emory University",
    "Florida Institute of Technology",
    "Florida State University",
    "Fordham University",
    "Georgetown University",
    "Georgia Tech",
    "Harvard University",
    "Howard University",
    "Hunter College in New York City",
    "Indiana University Bloomington",
    "Johns Hopkins University",
    "Lawrence High School",
    "Louisiana State University",
    "Loyola University Chicago",
    "Loyola University New Orleans",
    "McGill University",
    "McMaster University",
    "Michigan State University",
    "Midwestern State University",
    "New Canaan High School",
    "NIH Post-Bacc program",
    "Northeastern University",
    "Notre Dame",
    "New York University",
    "Oakland University",
    "Oregon State University",
    "Princeton Day High School",
    "Purdue University",
    "Redeemer University",
    "Rutgers New Brunswick",
    "Rutgers University Newark, School of Health Professions",
    "Smith College",
    "Stony Brook University",
    "Syracuse University",
    "Texas Christian University",
    "Tufts University",
    "UC Berkeley",
    "UC Davis",
    "UCI",
    "UCLA",
    "UCR",
    "UCSB",
    "UCSD",
    "University of Alabama at Birmingham",
    "University of British Columbia at Okanagan",
    "University of Florida",
    "University of Georgia",
    "University of Maryland",
    "University of Miami",
    "University of Michigan",
    "University of Pennsylvania",
    "University of Portland",
    "University of Tennessee",
    "University of Texas - San Antonio",
    "University of Texas Dallas",
    "University of Washington",
    "University of Waterloo",
    "University of Western Ontario",
    "University of Southern California",
    "University of Texas Austin",
    "Vanderbilt University",
    "Wake Forest",
    "Washington and Lee University",
    "Washington University in St. Louis",
  ].map((chapter) => ({
    label: chapter,
    value: chapter,
  }));
  // Fetch chapters from the backend API
  // useEffect(() => {
  //   const fetchChapters = async () => {
  //     const allChapters = await getAllChapters();
  //     setChapters(
  //       allChapters.map((chapter) => ({
  //         label: chapter.name,
  //         value: chapter.name,
  //       })),
  //     );
  //   };
  //   fetchChapters();
  // }, []);

  const isFormValid = () => {
    // eslint-disable-next-line no-useless-escape
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(email)) {
      return false;
    }

    if (password.length === 0) {
      return false;
    }

    if (password !== repeatPassword) {
      return false;
    }

    return true;
  };

  return (
    <View style={styles.root}>
      <ScrollView>
        <SafeAreaView>
          <View style={{ height: 127 }}>
            <Image style={styles.image} source={logo} />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "#4A4B57",
                paddingLeft: "3%",
                paddingTop: "2%",
              }}
            >
              Sign Up
            </Text>
          </View>

          <View
            style={{
              flex: 3,
              paddingVertical: "5%",
              paddingHorizontal: "3%",
              width: "100%",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Text style={styles.textInputTitle}>Email Address*</Text>
            </View>

            <TextInput
              accessibilityRole="text"
              placeholder="username@email.com"
              style={styles.textInput}
              onChangeText={setEmail}
              value={email}
            />

            <Text style={styles.textInputTitle}>Password*</Text>
            <TextInput
              accessibilityRole="text"
              placeholder="Password"
              style={styles.textInput}
              onChangeText={setPassword}
              value={password}
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry={true}
            />

            <Text style={styles.textInputTitle}>Repeat Password*</Text>
            <TextInput
              accessibilityRole="text"
              placeholder="Password"
              style={styles.textInput}
              onChangeText={setRepeatPassword}
              value={repeatPassword}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
            />
            <Text style={styles.errorTitle}>{error}</Text>

            <Text style={styles.textInputTitle}>Choose Chapter*</Text>
            <Dropdown
              data={CHAPTERS}
              labelField="label"
              valueField="value"
              onChange={(item) => console.log("Chapter selected", item)}
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
              disabled={!isFormValid()}
              title="Continue"
              onPress={() => {
                setError("");
                emailSignUp(email, password).catch((err: FirebaseError) => {
                  setError("Email is already in use");
                  if (err.code === "auth/email-already-in-use") {
                    setError("Email is already in use");
                  } else if (err.code === "auth/weak-password") {
                    setError("Password is too short");
                  } else {
                    setError("Unexpected error occured. Check your info");
                  }
                });
              }}
            />
          </View>

          <View
            style={{
              paddingHorizontal: "5%",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: "5%",
            }}
          >
            <Text style={{ fontSize: 14, color: "#4A4B57" }}>
              Already Have an Account?&nbsp;
            </Text>

            {/* TODO: change navigation to navigate to the login screen */}
            <Pressable
              accessibilityRole="button"
              style={styles.buttonTitle}
              onPress={() => {
                navigation.navigate("SignInScreen");
              }}
            >
              <Text
                style={{ fontSize: 14, color: "#005AA3", fontWeight: "bold" }}
              >
                Log In
              </Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

export default SignUpScreen;
