import {useCallback, useEffect, useState} from 'react';
import {useAppValues} from 'lib/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageKeys} from 'lib/types/common';

export function useAuthentication(retryAuth: boolean) {
  const {setAppValues} = useAppValues();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkIsLoggedIn = useCallback(async () => {
    setIsLoading(true);
    const token = await AsyncStorage.getItem(StorageKeys.USER_TOKEN);
    // in real life, call token to check auth / getUser
    if (!token) {
      setIsLoggedIn(false);
      setIsLoading(false);
      return;
    }
    setIsLoggedIn(true);
    setAppValues({retryAuth: false});
    setIsLoading(false);
  }, []);

  useEffect(() => {
    checkIsLoggedIn();
  }, [retryAuth]);

  return {
    isLoading,
    isLoggedIn,
  };
}
