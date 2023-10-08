import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppValues} from 'lib/AppContext';
import {ColorPalette} from 'lib/colors';
import {StorageKeys} from 'lib/types/common';
import {ReactElement} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';

function LoginScreen(): ReactElement {
  const {setAppValues} = useAppValues();

  const handleLogin = () => {
    AsyncStorage.setItem(StorageKeys.USER_TOKEN, 'fakeToken');
    setAppValues({retryAuth: true});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loginButton: {
    height: 64,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  buttonText: {
    textAlign: 'center',
    color: ColorPalette.ACCENT,
  },
});

export default LoginScreen;
