import { useState, useEffect } from "react";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import defaultSettings from "../components/DefaultSettings";

/**
 * Pulls an object containing the app settings from Async Storage and returns it.
 * If no settings exist in Async Storage, default settings are pushed and returned.
 */
const pullSettings = async () => {
  const jsonSettings = await AsyncStorage.getItem("SETTINGS");
  if (jsonSettings !== null) {
    const result = await JSON.parse(jsonSettings);
    return result;
  }
  return defaultSettings;
};

const useFontSize = (originalFontsize) => {
  const [settings, setSettings] = useState(defaultSettings);
  useEffect(() => {
    pullSettings().then((setting) => setSettings(setting));
  }, []);
  const asyncFontSize = settings.fontSize;
  const ratio = asyncFontSize / 20;
  const og = originalFontsize || 14;
  const additional = Platform.isPad ? 10 : 0;
  return og >= 30 ? og + additional : og * ratio + additional;
};

export default useFontSize;
