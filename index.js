import AsyncStorage from '@react-native-async-storage/async-storage';

export const EasyStorage = {
  async set(key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error("EasyStorage Error saving data", e);
    }
  },
  async get(key) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error("EasyStorage Error reading data", e);
    }
  }
};
