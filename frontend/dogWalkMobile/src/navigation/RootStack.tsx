import {useAuthentication} from 'core/auth/useAuthentication';
import {useAppValues} from 'lib/AppContext';
import AuthLoadingScreen from 'screens/AuthLoadingScreen';
import AppStack from './AppStack';
import LoginScreen from 'screens/LoginScreen';

export default function RootStack() {
  const {getAppValues} = useAppValues();
  const {retryAuth} = getAppValues();
  const {isLoading, isLoggedIn} = useAuthentication(retryAuth);

  if (isLoading) {
    return <AuthLoadingScreen />;
  }

  if (isLoggedIn) {
    return <AppStack />;
  }
  /**
   * Onboarding / Auth stack
   */
  return <LoginScreen />;
}
