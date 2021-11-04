import React from 'react';
import { NativeBaseProvider, Text } from 'native-base';

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <Text>Hello world here</Text>
    </NativeBaseProvider>
  );
};

export default App;
