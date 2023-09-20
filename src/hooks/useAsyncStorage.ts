import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { AsyncStorageKey } from "../types";

export default function useAsyncStorage<T>(key: AsyncStorageKey) {
  // Very bad code. New hook created per call but sometimes it may be saved across calls. A mess.
  const [storageValue, setStorageValue] = useState<T>();

  useEffect(() => {
    AsyncStorage.getItem(key).then((valueJSON) => {
      const value: T = JSON.parse(valueJSON);
      setStorageValue(value);
    });
  }, [key]);

  const updateStorageValue = useCallback(
    (newValue: T) => {
      setStorageValue(newValue);
      const newValueJSON = JSON.stringify(newValue);
      AsyncStorage.setItem(key, newValueJSON);
    },
    [key],
  );
  const clearStorageValue = useCallback(() => {
    setStorageValue(null);
    AsyncStorage.removeItem(key);
  }, [key]);

  return { storageValue, updateStorageValue, clearStorageValue };
}
