import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import Home from './Views/Home';

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="#005662" />
      <Home />
    </NativeBaseProvider>
  );
};

export default App;
