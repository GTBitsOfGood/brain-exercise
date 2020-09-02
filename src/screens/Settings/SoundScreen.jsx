import React, { useState } from "react";
import { View, Switch } from "react-native";
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from "@react-native-community/async-storage";
import PropTypes from "prop-types";
import defaultSettings from "../../components/DefaultSettings"
import Text from "../../components/Text";
import Button from "../../components/Button";
import styles from "../../styles/settings";


function SoundScreen({ route, navigation }) {
    // Setting up states and state modifiers for the sound effects, background music, and voice over settings
    const [soundEffectsToggleOn, setSoundEffectsToggleOn] = useState(route.params.soundEffectsOn
        || defaultSettings.soundEffectsOn)
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
            <View style={styles.section}>
                <View style={styles.touchableRow}>
                    <Text style={styles.text}>
                        Sound Effects
                    </Text>
                    <Switch
                        trackColor={{ false: "#ffffff", true: "#2a652c" }}
                        onValueChange={() => storeSettings("soundEffects")}
                        value={soundEffectsToggleOn}
                        accessibilityRole="switch"
                        />
                </View>
            </View>
            <View style={styles.section}>
                <View style={styles.touchableRow}>
                    <Text style={styles.text}>
                        Voice Over
                    </Text>
                    <Switch
                        trackColor={{ false: "#ffffff", true: "#2a652c" }}
                        onValueChange={() => storeSettings("voiceOver")}
                        value={voiceOverToggleOn}
                        accessibilityRole="switch"
                        />
                </View>
            </View>
            <Button
                title="Save Changes"
                style={{ marginTop: 20 }}
                shouldNotPlay={!soundEffectsToggleOn}
                onPress={async () => {
                    await storeSettings()
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [
                            { name: 'HomeScreen' },
                            ],
                        })
                    );
                }}
            />
        </View>
    )
}

SoundScreen.propTypes = {
    navigation: PropTypes.object,
    route: PropTypes.object,
};

export default SoundScreen;
