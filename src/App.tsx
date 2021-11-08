import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import CustomNavigator from './navigation/CustomNavigator';

import store from './store/store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <StatusBar backgroundColor="#005662" />
        <NavigationContainer>
          <CustomNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
