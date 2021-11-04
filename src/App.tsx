import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Home from './Views/Home';

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
};

export default App;
