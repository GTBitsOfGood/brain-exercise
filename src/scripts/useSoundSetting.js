import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import defaultSettings from "../components/DefaultSettings";

/**
 * Pulls an object containing the app settings from Async Storage and returns it.
 * If no settings exist in Async Storage, default settings are pushed and returned.
 */
const pullSettings = async () => {
    const jsonSettings = await AsyncStorage.getItem("SETTINGS")
    if (jsonSettings !== null) {
       const result = await JSON.parse(jsonSettings);
       return result;
    }
    return defaultSettings;
};

const useSoundSetting = () => {
    const [settings, setSettings] = useState(defaultSettings)
    useEffect(() => {
        pullSettings()
        .then((setting) => setSettings(setting));
    }, []);
    const soundObj = {
      soundEffectsOn: settings.soundEffectsOn,
      voiceOverOn: settings.voiceOverOn,
    }
    return soundObj;
};

export default useSoundSetting;
