import AsyncStorage from '@react-native-async-storage/async-storage';

const LAST_ACCESS_PREFIX = 'lastAccess_';

export async function saveLastAccess(contactId) {
    const timestamp = new Date().toString();
    await AsyncStorage.setItem(`${LAST_ACCESS_PREFIX}${contactId}`, timestamp);
}

export async function getLastAccess(contactId) {
    return await AsyncStorage.getItem(`${LAST_ACCESS_PREFIX}${contactId}`);
}
