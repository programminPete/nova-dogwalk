import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

/**
 * @todo - note - there is react-native-splash-screen that I thought should be
 * created at launch , but doesn't seem to be working properly, so using this
 * Need to either Remove that package, if this works ,or set that up to be the launch screen
 * @returns
 */
export default function AuthLoadingScreen() {
  return (
    <View style={styles.container}>
      <Text>Dog Walker App Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
