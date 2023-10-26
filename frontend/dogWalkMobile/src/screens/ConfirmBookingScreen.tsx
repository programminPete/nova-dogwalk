import {ReactElement} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export function ConfirmBookingScreen(): ReactElement {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text>To Do: Handle selecting dog, and booking</Text>
        <Text>- If more than 1 dog - select dog, then confirm modal</Text>
        <Text>- Else: confirm modal</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    padding: 16,
    justifyContent: 'center',
    gap: 8,
  },
});
