import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {AppStackParamList, AppStackRoutes} from './routes';
import {BookingScreen} from 'screens/BookingScreen';
import {ProfileScreen} from 'screens/ProfileScreen';
import {ReactElement, ReactNode} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ConfirmBookingScreen} from 'screens/ConfirmBookingScreen';

const AppStack = createNativeStackNavigator<AppStackParamList>();

export default function AppStackScreens() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name={AppStackRoutes.BOOKING}
        component={BookingScreen}
        options={{
          headerTitleAlign: 'left',
          headerTitle: '',
          headerLeft: () => (
            <View>
              <Text style={styles.headerTitle}>Book a Walk</Text>
            </View>
          ),
          headerRight: () => <ProfileImageButton />,
        }}
      />
      <AppStack.Screen
        name={AppStackRoutes.PROFILE}
        component={ProfileScreen}
        options={{
          headerTitleAlign: 'left',
          headerBackTitle: 'Your Profile',
        }}
      />
      <AppStack.Screen
        name={AppStackRoutes.CONFIRM_BOOKING}
        component={ConfirmBookingScreen}
        options={{
          headerTitle: '',
          headerTitleAlign: 'left',
          headerBackTitle: 'Confirm Booking',
        }}
      />
    </AppStack.Navigator>
  );
}

function ProfileImageButton(): ReactNode {
  /**
   * @note - would make a helper so you dont have to actually pass in this type all the time
   */
  const navigation =
    useNavigation<
      NativeStackNavigationProp<
        AppStackParamList,
        typeof AppStackRoutes.PROFILE
      >
    >();

  const handleNav = () => {
    navigation.navigate(AppStackRoutes.PROFILE);
  };
  return (
    <Pressable onPress={handleNav}>
      <Image
        source={{uri: 'https://picsum.photos/200'}}
        style={styles.profileImage}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 20,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
