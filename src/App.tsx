import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import CustomNavigator from './navigation/CustomNavigator';

import store, { persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NativeBaseProvider>
          <StatusBar backgroundColor="#005662" />
          <NavigationContainer>
            <CustomNavigator />
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
