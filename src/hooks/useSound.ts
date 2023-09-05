import { useMemo, useCallback, useEffect } from "react";
import { AVPlaybackSource, Audio } from "expo-av";
import { SoundSetting } from "../types";
import useAsyncStorage from "./useAsyncStorage";

type SoundSettings = {
  [key in SoundSetting]: string;
};

export default function useSound(
  sound: AVPlaybackSource,
  setting: SoundSetting,
  playAutomatic: boolean = true,
) {
  const soundObject = useMemo(() => new Audio.Sound(), []);
  const { storageValue: settings } = useAsyncStorage<SoundSettings>("SETTINGS");

  const loadSound = useCallback(async () => {
    if (settings && settings[setting]) {
      await soundObject.loadAsync(sound);
      if (playAutomatic) {
        await soundObject.playAsync();
      }
    }
  }, [sound, soundObject, settings, setting, playAutomatic]);

  const unloadSound = useCallback(async () => {
    if (settings && settings[setting]) {
      await soundObject.unloadAsync();
    }
  }, [soundObject, settings, setting]);

  const playSound = useCallback(async () => {
    if (settings && settings[setting]) {
      await soundObject.replayAsync();
    }
  }, [soundObject, settings, setting]);

  useEffect(() => {
    loadSound();
    return () => {
      unloadSound();
    };
  }, [loadSound, unloadSound]);

  return { soundObject, loadSound, unloadSound, playSound };
}
