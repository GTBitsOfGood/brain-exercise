import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "react-native-elements";
import { useSelector } from "react-redux";
import SlidingUpPanel from "rn-sliding-up-panel";
import { getAuth } from "firebase/auth";
import HomeIcon from "../../assets/HomeIcon";
import ProfileIcon from "../../assets/ProfileIcon";
import SettingsIcon from "../../assets/SettingsIcon";
import { RootStackParamList, UserAnalytics, HttpMethod } from "../../types";
import { RootState } from "../../redux/rootReducer";
import { AuthUser } from "../../redux/reducers/authReducer/types";
import { internalRequest } from "../../requests";

import ContinueButton from "../../components/ContinueButton";

type Props = NativeStackScreenProps<RootStackParamList, "ProfileScreen">;

function ProfileScreen({ navigation }: Props) {
  const auth = getAuth();
  const user = auth.currentUser;
  const userInfo = useSelector<RootState>((state) => state.auth) as AuthUser;
  const panelRef = useRef<SlidingUpPanel>(null);

  console.log(userInfo);

  const [name, setName] = useState("Johannes Qian");
  const [dob, setDob] = useState(new Date("2000-12-31T05:00:00.000Z"));
  const [areaCode, setAreaCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("1231231234");
  const [email, setEmail] = useState("sample@bei.com");
  const [chapter, setChapter] = useState("Georgia Tech Chapter");
  const [location, setLocation] = useState("GA, USA");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "Johannes Qian",
    dob: "12312000",
    areaCode: "+1",
    phoneNumber: "1231231234",
    email: "sample@bei.com",
    chapter: "Georgia Tech Chapter",
    location: "GA, USA",
  });

  useEffect(() => {
    panelRef.current?.hide();
    if (userInfo.firstName && userInfo.lastName) {
      setName(`${userInfo.firstName} ${userInfo.lastName}`);
    } else {
      setName("Johannes Qian");
    }

    if (userInfo.birthDate) {
      setDob(new Date(userInfo.birthDate));
    } else {
      setDob(new Date("2000-12-31T05:00:00.000Z"));
    }

    if (userInfo.phoneNumber) {
      setPhoneNumber(userInfo.phoneNumber);
    } else {
      setPhoneNumber("1231231234");
    }

    if (userInfo.email) {
      setEmail(userInfo.email);
    } else {
      setEmail("sample@bei.com");
    }

    if (userInfo.chapter) {
      setChapter(userInfo.chapter);
    } else {
      setChapter("Georgia Tech Chapter");
    }

    if (userInfo.location) {
      if (userInfo.location.country) {
        if (userInfo.location.state) {
          setLocation(
            `${userInfo.location.state}, ${userInfo.location.country}`,
          );
        } else {
          setLocation(userInfo.location.country);
        }
      } else {
        setLocation("GA, USA");
      }
    } else {
      setLocation("GA, USA");
    }
  }, [userInfo]);

  const formatDOB = (unformatteddob: Date) => {
    return `${unformatteddob.getMonth() + 1} / ${
      unformatteddob.getDate() + 1
    } / ${unformatteddob.getFullYear()}`;
  };

  function open() {
    setFormData({
      name,
      dob: formatDOB(dob).replace(/[ /]/g, ""),
      areaCode,
      phoneNumber,
      email,
      chapter,
      location,
    });
    setError("");
    panelRef.current?.show();
  }

  const formatPhoneNumber = (currentNumber: string) => {
    const digitsOnly = currentNumber.replace(/\D/g, "");

    if (digitsOnly.length <= 3) {
      return digitsOnly;
    }
    if (digitsOnly.length <= 6) {
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

  const formatDOBstring = (input: string) => {
    const digitsOnly = input.replace(/-/g, "");
    if (digitsOnly.length <= 2) {
      return digitsOnly;
    }
    if (digitsOnly.length <= 4) {
      return `${digitsOnly.slice(0, 2)} / ${digitsOnly.slice(2)}`;
    }
    return `${digitsOnly.slice(0, 2)} / ${digitsOnly.slice(
      2,
      4,
    )} / ${digitsOnly.slice(4)}`;
  };

  const handleDOBChange = (input: string) => {
    const tempSetDob = (newDob: string) => {
      setFormData((prevData) => ({
        ...prevData,
        dob: newDob,
      }));
    };

    const cleanInput = input.replace(/[ ./]/g, "");
    let digitsOnlyDOB = formData.dob;

    if (cleanInput.length < digitsOnlyDOB.length) {
      // backspace
      digitsOnlyDOB = digitsOnlyDOB.slice(0, -1);
      tempSetDob(digitsOnlyDOB);
    } else {
      tempSetDob(cleanInput);
    }
  };

  type FormDataType = {
    [key: string]: string | number | boolean;
  };

  const handleChange = (
    value: string | number | boolean,
    field: keyof FormDataType,
  ) => {
    if (field === "phoneNumber") {
      const tempSetPhoneNumber = (newNum: string) => {
        setFormData((prevData) => ({
          ...prevData,
          phoneNumber: newNum,
        }));
      };
      handlePhoneNumberChange(
        String(value),
        tempSetPhoneNumber,
        formData.phoneNumber,
      );
    } else if (field === "dob") {
      handleDOBChange(String(value));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    }
    setError("");
  };

  const isFormValid = () => {
    if (
      formData.name.indexOf(" ") === -1 ||
      formData.name.substring(
        formData.name.indexOf(" ") + 1,
        formData.name.length,
      ).length === 0
    ) {
      setError("Please enter a last name");
      return false;
    }

    if (formData.name.substring(0, formData.name.indexOf(" ")).length === 0) {
      setError("Please enter a first name");
      return false;
    }

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      setError("Please enter a valid phone number");
      return false;
    }

    const formatteddob = `${formData.dob.substring(4)}-${formData.dob.substring(
      0,
      2,
    )}-${formData.dob.substring(2, 4)}`;

    if (!/^\d{4}-\d{2}-\d{2}/.test(formatteddob)) {
      setError("Please enter a valid date of birth");
      return false;
    }

    // Following check if the date matches number of days in a month

    const checkDate = new Date(formatteddob);
    if (checkDate.toString() === "Invalid Date") {
      setError("Please enter a valid date of birth");
      return false;
    }

    const today = new Date();
    if (checkDate >= today) {
      setError("Please enter a valid date of birth");
      return false;
    }

    return true;
  };

  async function close(save) {
    if (save) {
      if (!isFormValid()) {
        return;
      }
      const firstName = formData.name.substring(0, formData.name.indexOf(" "));
      const lastName = formData.name.substring(
        formData.name.indexOf(" ") + 1,
        formData.name.length,
      );
      const newDob = new Date(
        `${formData.dob.substring(4)}-${formData.dob.substring(
          0,
          2,
        )}-${formData.dob.substring(2, 4)}`,
      );
      try {
        const body: Record<string, string> = {
          email: user.email,
          firstName,
          lastName,
          phoneNumber: formData.phoneNumber,
          birthDate: `${formData.dob.substring(0, 2)}-${formData.dob.substring(
            2,
            4,
          )}-${formData.dob.substring(4)}`,
        };
        await internalRequest<UserAnalytics>({
          url: "/api/patient/edit-patient",
          body,
          method: HttpMethod.POST,
        });
      } catch (e) {
        setError(`An error occurred: ${e}`);
        return;
      }
      setName(formData.name);
      setDob(newDob);
      setAreaCode(formData.areaCode);
      setPhoneNumber(formData.phoneNumber);
      setEmail(formData.email);
      setChapter(formData.chapter);
      setLocation(formData.location);
    }
    panelRef.current?.hide();
  }

  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        padding: "4%",
        paddingTop: "16%",
        backgroundColor: "white",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: "#2B3674",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          Profile
        </Text>
        <Button
          onPress={open}
          title="Edit"
          titleStyle={{
            color: "white",
            fontSize: 20,
            fontWeight: "600",
            textAlign: "center",
          }}
          buttonStyle={{
            backgroundColor: "#008AFC",
            borderRadius: 12,
            paddingHorizontal: "4%",
          }}
        />
      </View>
      <View
        style={{
          marginTop: "4%",
          display: "flex",
          justifyContent: "space-between",
          height: "80%",
        }}
      >
        <View
          style={{
            paddingVertical: "6%",
            paddingHorizontal: "4%",
            borderBottomWidth: 1,
            borderColor: "#9CA5C2",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: "#2B3674",
            }}
          >
            Name
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 600,
              marginTop: "4%",
              color: "#2B3674",
            }}
          >
            {name}
          </Text>
        </View>
        <View
          style={{
            paddingVertical: "6%",
            paddingHorizontal: "4%",
            borderBottomWidth: 1,
            borderColor: "#9CA5C2",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: "#2B3674",
            }}
          >
            Date of Birth
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 600,
              marginTop: "4%",
              color: "#2B3674",
            }}
          >
            {formatDOB(dob)}
          </Text>
        </View>
        <View
          style={{
            paddingVertical: "6%",
            paddingHorizontal: "4%",
            borderBottomWidth: 1,
            borderColor: "#9CA5C2",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: "#2B3674",
            }}
          >
            Phone Number
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 600,
              marginTop: "4%",
              color: "#2B3674",
            }}
          >{`${areaCode} ${formatPhoneNumber(phoneNumber)}`}</Text>
        </View>
        <View
          style={{
            paddingVertical: "6%",
            paddingHorizontal: "4%",
            borderBottomWidth: 1,
            borderColor: "#9CA5C2",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: "#2B3674",
            }}
          >
            Email Address
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 600,
              marginTop: "4%",
              color: "#2B3674",
            }}
          >
            {email}
          </Text>
        </View>
        <View
          style={{
            paddingVertical: "6%",
            paddingHorizontal: "4%",
            borderBottomWidth: 1,
            borderColor: "#9CA5C2",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: "#2B3674",
            }}
          >
            Associated Chapter
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 600,
              marginTop: "4%",
              color: "#2B3674",
            }}
          >
            {chapter}
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 600,
              marginTop: "4%",
              color: "#2B3674",
            }}
          >
            {location}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 13,
          marginRight: 13,
          paddingBottom: 18,
          marginTop: 18,
        }}
      >
        <TouchableOpacity
          accessibilityRole="button"
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <HomeIcon color="#9CA5C2"></HomeIcon>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "#9CA5C2",
              paddingTop: 4,
            }}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <ProfileIcon color="#008AFC" props={undefined}></ProfileIcon>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#2B3674",
              paddingTop: 4,
            }}
          >
            Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
          onPress={() => navigation.navigate("SettingsScreen")}
        >
          <SettingsIcon></SettingsIcon>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "#9CA5C2",
              paddingTop: 4,
            }}
          >
            Settings
          </Text>
        </TouchableOpacity>
      </View>
      <SlidingUpPanel
        ref={panelRef}
        height={Dimensions.get("window").height * 0.85}
        draggableRange={{
          top: Dimensions.get("window").height * 0.85,
          bottom: 0,
        }}
        allowDragging={false}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "flex-start",
            borderRadius: 12,
          }}
        >
          <View
            style={{
              paddingVertical: "5%",
              paddingHorizontal: "4%",
              borderBottomWidth: 1,
              borderColor: "#9CA5C2",
              width: "92%",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#2B3674",
              }}
            >
              Name
            </Text>
            <TextInput
              accessibilityLabel="Text input field"
              style={{
                fontSize: 22,
                fontWeight: "600",
                marginTop: "4%",
                color: "#2B3674",
                borderRadius: 12,
                backgroundColor: "#E3EAFC",
                paddingHorizontal: "4%",
                paddingVertical: "2%",
              }}
              value={formData.name}
              onChangeText={(e) => handleChange(e, "name")}
              placeholder="Enter Name"
              accessibilityHint='The text written in this input field will be saved as the user"s name'
            />
          </View>
          <View
            style={{
              paddingVertical: "5%",
              paddingHorizontal: "4%",
              borderBottomWidth: 1,
              borderColor: "#9CA5C2",
              width: "92%",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#2B3674",
              }}
            >
              Date of Birth
            </Text>
            <TextInput
              accessibilityLabel="Text input field"
              style={{
                fontSize: 22,
                fontWeight: "600",
                marginTop: "4%",
                color: "#2B3674",
                borderRadius: 12,
                backgroundColor: "#E3EAFC",
                paddingHorizontal: "4%",
                paddingVertical: "2%",
              }}
              value={formatDOBstring(formData.dob)}
              onChangeText={(e) => handleChange(e, "dob")}
              placeholder="Enter Date of Birth"
              accessibilityHint='The text written in this input field will be saved as the user"s date of birth'
            />
          </View>
          <View
            style={{
              paddingVertical: "5%",
              paddingHorizontal: "4%",
              borderBottomWidth: 1,
              borderColor: "#9CA5C2",
              width: "92%",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#2B3674",
              }}
            >
              Phone Number
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                accessibilityLabel="Text input field"
                style={{
                  fontSize: 22,
                  fontWeight: "600",
                  marginTop: "4%",
                  color: "#2B3674",
                  borderRadius: 12,
                  backgroundColor: "#E3EAFC",
                  paddingHorizontal: "4%",
                  paddingVertical: "2%",
                  width: "16%",
                }}
                value={formData.areaCode}
                onChangeText={(e) => handleChange(e, "areaCode")}
                placeholder="Enter Area Code"
                keyboardType="phone-pad"
                accessibilityHint='The text written in this input field will be saved as the user"s area code'
              />
              <TextInput
                accessibilityLabel="Text input field"
                style={{
                  fontSize: 22,
                  fontWeight: "600",
                  marginTop: "4%",
                  color: "#2B3674",
                  borderRadius: 12,
                  backgroundColor: "#E3EAFC",
                  paddingHorizontal: "4%",
                  paddingVertical: "2%",
                  width: "82%",
                }}
                value={formatPhoneNumber(formData.phoneNumber)}
                onChangeText={(e) => handleChange(e, "phoneNumber")}
                placeholder="Enter Phone Number"
                keyboardType="phone-pad"
                accessibilityHint="The text written in this input field will be saved as the user's phone number"
              />
            </View>
          </View>
          <View
            style={{
              paddingVertical: "5%",
              paddingHorizontal: "4%",
              borderBottomWidth: 1,
              borderColor: "#9CA5C2",
              width: "92%",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#2B3674",
              }}
            >
              Associated Chapter
            </Text>
            <TextInput
              accessibilityLabel="Text input field"
              style={{
                fontSize: 22,
                fontWeight: "600",
                marginTop: "4%",
                color: "#2B3674",
                borderRadius: 12,
                backgroundColor: "#E3EAFC",
                paddingHorizontal: "4%",
                paddingVertical: "2%",
              }}
              value={formData.chapter}
              onChangeText={(e) => handleChange(e, "chapter")}
              placeholder="Enter Chapter"
              accessibilityHint='The text written in this input field will be saved as the user"s associated chapter'
            />
          </View>
          <View
            style={{
              width: "92%",
              marginBottom: "-2%",
            }}
          >
            {error ? (
              <Text
                style={{
                  color: "red",
                  fontSize: 18,
                  fontWeight: 400,
                  textAlign: "center",
                  paddingVertical: "6%",
                }}
              >
                {error}
              </Text>
            ) : (
              <ContinueButton
                title="Save Changes"
                backgroundColor="#008AFC"
                titleColor="white"
                onPressFn={() => close(true)}
              />
            )}
          </View>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => close(false)}
            style={{
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#2B3674",
                fontSize: 20,
                fontWeight: 600,
                textDecorationLine: "underline",
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </SlidingUpPanel>
    </View>
  );
}

export default ProfileScreen;
