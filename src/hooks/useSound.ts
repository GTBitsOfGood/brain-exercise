import { useMemo, useCallback, useEffect } from "react";
import { AVPlaybackSource, Audio } from "expo-av";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SoundSetting } from "../types";

export default function useSound(sound: AVPlaybackSource, setting: SoundSetting, playAutomatic: boolean = true) {
  const soundObject = useMemo(() => new Audio.Sound(), []);
  
  const loadSound = useCallback(async () => {
    const storedSettings = await AsyncStorage.getItem("SETTINGS");
    const settings = await JSON.parse(storedSettings);
    if (settings[setting]) {
      await soundObject.loadAsync(sound);
      if (playAutomatic) {
        await soundObject.playAsync();
      }
    }
  }, [sound, soundObject, setting, playAutomatic]);

  const unloadSound = useCallback(async () => {
    const storedSettings = await AsyncStorage.getItem("SETTINGS");
    const settings = await JSON.parse(storedSettings);
    if (settings[setting]) {
      await soundObject.unloadAsync();
    }
  }, [soundObject, setting]);

  const playSound = useCallback(async () => {
    const storedSettings = await AsyncStorage.getItem("SETTINGS");
    const settings = await JSON.parse(storedSettings);
    if (settings[setting]) {
      await soundObject.replayAsync();
    }
  }, [soundObject, setting]);

  useEffect(() => {
    loadSound();
    return () => {
      unloadSound();
    };
  }, [loadSound, unloadSound]);

  return { soundObject, loadSound, unloadSound, playSound };
}
