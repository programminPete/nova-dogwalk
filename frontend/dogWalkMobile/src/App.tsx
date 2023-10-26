import React from 'react';
import {AppProvider} from 'lib/AppContext';
import RootStack from 'navigation/RootStack';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <AppProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
