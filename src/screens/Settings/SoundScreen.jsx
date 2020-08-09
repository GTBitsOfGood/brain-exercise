import React, { useState } from "react";
import { View, StyleSheet, Switch } from "react-native";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";
import PropTypes from "prop-types";
import defaultSettings from "../../components/DefaultSettings"
import Text from "../../components/Text";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "space-between",
        margin: 25,
    },
    settingsBlock: {
        flex: 1,
        justifyContent: "space-between",
        maxHeight: 70,
    }, 
    settingAndSwitch: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20,
    },
    saveButton: {
        marginTop: 20,
        height: 45,
        borderRadius: 10,
        backgroundColor: "#2a652c",
    },
})


function SoundScreen({ route, navigation }) {
    // Setting up states and state modifiers for the sound effects, background music, and voice over settings
    const [soundEffectsToggleOn, setSoundEffectsToggleOn] = useState(route.params.soundEffectsOn
        || defaultSettings.soundEffectsOn)
    const [backgroundMusicToggleOn, setBackgroundMusicToggleOn] = useState(route.params.backgroundMusicOn
        || defaultSettings.backgroundMusicOn)
    const [voiceOverToggleOn, setVoiceOverToggleOn] = useState(route.params.voiceOverOn
        || defaultSettings.voiceOverOn)
    const settingsObj = route.params;
    /**
     * Takes in the setting type and updates the setting in async storage
     * @param {String} switchType the type of setting to be updated, leave blank to push changes
     */
    const storeSettings = async (switchType = "saving") => {
        if (switchType === "soundEffects") {
            if (soundEffectsToggleOn) {
                // going from enabled to unenabled
                setSoundEffectsToggleOn(false)
                settingsObj.soundEffectsOn = false
            } else {
                // going from unenabled to enabled
                setSoundEffectsToggleOn(true)
                settingsObj.soundEffectsOn = true
            }
        } else if (switchType === "backgroundMusic") {
            if (backgroundMusicToggleOn) {
                // going from enabled to unenabled
                setBackgroundMusicToggleOn(false)
                settingsObj.backgroundMusicOn = false
            } else {
                // going from unenabled to enabled
                setBackgroundMusicToggleOn(true)
                settingsObj.backgroundMusicOn= true
            }
        } else if (switchType === "voiceOver") {
            if (voiceOverToggleOn) {
                // going from enabled to unenabled
                setVoiceOverToggleOn(false)
                settingsObj.voiceOverOn = false
            } else {
                // going fron unenabled to enabled
                setVoiceOverToggleOn(true)
                settingsObj.voiceOverOn = true
            }
        } else {
            // Only other option is to push the saved settings to async storage
            const jsonSettings = JSON.stringify(settingsObj);
            await AsyncStorage.setItem("SETTINGS", jsonSettings);
        }
    }

    return (
        <View style={styles.root}>
            <View style={styles.settingsBlock}>
                <View style={styles.settingAndSwitch}>
                    <Text style={{fontSize: route.params.fontSize}}>
                        Sound Effects
                    </Text>
                    <Switch
                     trackColor={{ false: "#ffffff", true: "#2a652c" }}
                     onValueChange={() => storeSettings("soundEffects")}
                     value={soundEffectsToggleOn}
                     accessibilityRole="switch"
                     />
                </View>
                <View style={styles.settingAndSwitch}>
                    <Text style={{fontSize: route.params.fontSize,}}>Background Music</Text>
                    <Switch
                     trackColor={{ false: "#ffffff", true: "#2a652c" }}
                     onValueChange={() => storeSettings("backgroundMusic")}
                     value={backgroundMusicToggleOn}
                     accessibilityRole="switch"
                     />
                </View>
                <View style={styles.settingAndSwitch}>
                    <Text style={{fontSize: route.params.fontSize}}>Voice Over</Text>
                    <Switch
                     trackColor={{ false: "#ffffff", true: "#2a652c" }}
                     onValueChange={() => storeSettings("voiceOver")}
                     value={voiceOverToggleOn}
                     accessibilityRole="switch"
                     />
                </View>
                <View>
                <Button
                  title="Save Changes"
                  buttonStyle={styles.saveButton}
                  onPressIn={() => storeSettings()}
                  onPress={() => navigation.goBack()}
                />
                </View>
            </View>
        </View>
    )
}

SoundScreen.propTypes = {
    navigation: PropTypes.object,
    route: PropTypes.object,
};

export default SoundScreen;