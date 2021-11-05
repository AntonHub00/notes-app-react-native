import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './Views/HomeView';
import ProfileView from './Views/ProfileView';
import TopBarComponent from './Components/TopBarComponent';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="#005662" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#00838f',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeView}
            options={({ navigation }) => ({
              header: props => (
                <TopBarComponent
                  onProfileAvatarPress={() => navigation.navigate('Profile')}
                  {...props}
                />
              ),
            })}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileView}
            options={{ title: 'Profile' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
