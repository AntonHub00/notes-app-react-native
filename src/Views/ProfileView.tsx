import React, { useState } from 'react';
import { VStack } from 'native-base';
import AvatarComponent from '../Components/AvatarComponent';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BaseButtonComponent from '../Components/BaseButtonComponent';
import FormControlInputComponent from '../Components/FormControlInputComponent';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { saveProfileInfo } from '../store/stores/profileInfoSlice';

const ProfileView: React.FC = () => {
  const profileInfoState = useAppSelector(state => state.profileInfo);
  const actionsDispatcher = useAppDispatch();

  const [firstName, setFirstName] = useState(profileInfoState.firstName);
  const [lastName, setLastName] = useState(profileInfoState.lastName);
  const [firstNameInvalid, setFirstNameInvalid] = useState(false);

  const saveCurrentProfileInfo = () => {
    if (firstName === '') {
      setFirstNameInvalid(true);
      return;
    }

    setFirstNameInvalid(false);

    actionsDispatcher(saveProfileInfo({ firstName, lastName }));
  };

  return (
    <KeyboardAwareScrollView>
      <VStack pt="5" alignItems="center" h="full">
        <AvatarComponent
          size="3xs"
          uri="https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg"
        />
        <BaseButtonComponent
          text="Update photo"
          onPressAction={() => {}}
          {...{ mt: '4', mb: '6' }}
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
