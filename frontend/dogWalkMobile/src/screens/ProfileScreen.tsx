import {ReactElement} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export function ProfileScreen(): ReactElement {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
