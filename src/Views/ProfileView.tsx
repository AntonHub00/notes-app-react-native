import React, { useState } from 'react';
import { useToast, VStack } from 'native-base';
import AvatarComponent from '../Components/AvatarComponent';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BaseButtonComponent from '../Components/BaseButtonComponent';
import FormControlInputComponent from '../Components/FormControlInputComponent';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { saveProfileInfo } from '../store/stores/profileInfoSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/CustomNavigatorTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileView: React.FC<Props> = () => {
  const profileInfoState = useAppSelector(state => state.profileInfo);
  const actionsDispatcher = useAppDispatch();

  const [firstName, setFirstName] = useState(profileInfoState.firstName);
  const [lastName, setLastName] = useState(profileInfoState.lastName);
  const [firstNameInvalid, setFirstNameInvalid] = useState(false);

  const saveProfileInfoToast = useToast();

  const saveCurrentProfileInfo = () => {
    if (firstName === '') {
      setFirstNameInvalid(true);
      return;
    }

    setFirstNameInvalid(false);

    actionsDispatcher(saveProfileInfo({ firstName, lastName }));

    saveProfileInfoToast.show({
      description: 'Profile info saved',
      duration: 2000,
    });
  };

  return (
    <KeyboardAwareScrollView>
      <VStack pt="5" alignItems="center" h="full">
        <AvatarComponent
          size="3xs"
          source={require('../images/profileImage.png')}
          {...{ mt: '4', mb: '12' }}
        />
        <VStack space="5">
          <FormControlInputComponent
            inputName="First name"
            inputType="string"
            invalid={firstNameInvalid}
            placeholder="e.g. John"
            required={true}
            errorMessage="This field is required"
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
          <FormControlInputComponent
            inputName="Last name"
            inputType="string"
            invalid={false}
            placeholder="e.g. Wick"
            required={false}
            value={lastName}
            onChangeText={text => setLastName(text)}
          />

          <BaseButtonComponent
            text="Save"
            onPressAction={saveCurrentProfileInfo}
          />
        </VStack>
      </VStack>
    </KeyboardAwareScrollView>
  );
};

export default ProfileView;
