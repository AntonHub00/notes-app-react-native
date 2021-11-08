import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from '../Views/HomeView';
import TopBarComponent from '../Components/TopBarComponent';
import ProfileView from '../Views/ProfileView';
import NoteView from '../Views/NoteView';
import { RootStackParamList } from './CustomNavigatorTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const CustomNavigator: React.FC = () => {
  const { Navigator, Screen } = Stack;

  return (
    <Navigator
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
      <Screen
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
      <Screen name="Profile" component={ProfileView} />
      <Screen name="Note" component={NoteView} />
    </Navigator>
  );
};

export default CustomNavigator;
