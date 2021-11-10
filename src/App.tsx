import React, { useEffect } from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import CustomNavigator from './navigation/CustomNavigator';

import store, { persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import LoadingSpinnerComponent from './Components/LoadingSpinnerComponent';

import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <PersistGate
          persistor={persistor}
          loading={<LoadingSpinnerComponent />}
        >
          <StatusBar backgroundColor="#005662" />
          <NavigationContainer>
            <CustomNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
};

export default App;
