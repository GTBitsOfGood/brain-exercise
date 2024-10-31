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
import HomeIcon from "../../assets/HomeIcon";
import ProfileIcon from "../../assets/ProfileIcon";
import SettingsIcon from "../../assets/SettingsIcon";
import { RootStackParamList } from "../../types";
import { RootState } from "../../redux/rootReducer";
import { AuthUser } from "../../redux/reducers/authReducer/types";

import ContinueButton from "../../components/ContinueButton";

type Props = NativeStackScreenProps<RootStackParamList, "ProfileScreen">;

function ProfileScreen({ navigation }: Props) {
  const userInfo = useSelector<RootState>((state) => state.auth) as AuthUser;
  const panelRef = useRef<SlidingUpPanel>(null);

  const [name, setName] = useState("Johannes Qian");
  const [dob, setDob] = useState("01 / 01 / 2024");
  const [areaCode, setAreaCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("1231231234");
  const [email, setEmail] = useState("sample@bei.com");
  const [chapter, setChapter] = useState("Georgia Tech Chapter");
  const [location, setLocation] = useState("GA, USA");

  const [formData, setFormData] = useState({
    name: "Johannes Qian",
    dob: "01 / 01 / 2024",
    areaCode: "+1",
    phoneNumber: "1231231234",
    email: "sample@bei.com",
    chapter: "Georgia Tech Chapter",
    location: "GA, USA",
  });

  useEffect(() => {
    if (userInfo.firstName && userInfo.lastName) {
      setName(`${userInfo.firstName} ${userInfo.lastName}`);
    } else {
      setName("Johannes Qian");
    }

    if (userInfo.birthDate) {
      setDob(userInfo.birthDate);
    } else {
      setDob("01 / 01 / 2024");
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

  function getFormattedPhoneNumber() {
    return `(${phoneNumber.slice(0, 3)})${phoneNumber.slice(
      3,
      6,
    )}-${phoneNumber.slice(6, 10)}`;
  }

  function open() {
    setFormData({
      name,
      dob,
      areaCode,
      phoneNumber,
      email,
      chapter,
      location,
    });
    panelRef.current?.show();
  }

  function close(save) {
    if (save) {
      setName(formData.name);
      setDob(formData.dob);
      setAreaCode(formData.areaCode);
      setPhoneNumber(formData.phoneNumber);
      setEmail(formData.email);
      setChapter(formData.chapter);
      setLocation(formData.location);
    } else {
      setFormData({
        name,
        dob,
        areaCode,
        phoneNumber,
        email,
        chapter,
        location,
      });
    }
    panelRef.current?.hide();
  }

  type FormDataType = {
    [key: string]: string | number | boolean;
  };

  const handleChange = (
    value: string | number | boolean,
    field: keyof FormDataType,
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

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
            {dob}
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
          >{`${areaCode} ${getFormattedPhoneNumber()}`}</Text>
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
              value={formData.dob}
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
                value={formData.phoneNumber}
                onChangeText={(e) => handleChange(e, "phoneNumber")}
                placeholder="Enter Phone Number"
                keyboardType="phone-pad"
                accessibilityHint='The text written in this input field will be saved as the user"s phone number'
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
              Email Address
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
              value={formData.email}
              onChangeText={(e) => handleChange(e, "email")}
              placeholder="Enter Email"
              keyboardType="email-address"
              accessibilityHint='The text written in this input field will be saved as the user"s email address'
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
            <ContinueButton
              title="Save Changes"
              backgroundColor="#008AFC"
              titleColor="white"
              onPressFn={() => close(true)}
            />
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
