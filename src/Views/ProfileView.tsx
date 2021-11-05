import React from 'react';
import { VStack } from 'native-base';
import AvatarComponent from '../Components/AvatarComponent';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BaseButtonComponent from '../Components/BaseButtonComponent';
import FormControlInputComponent from '../Components/FormControlInputComponent';

const ProfileView: React.FC = () => {
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
          {...{ mt: '4', mb: '10' }}
        />

        <VStack space="5">
          <FormControlInputComponent
            inputName="First name"
            inputType="string"
            invalid={true}
            placeholder="e.g. John"
            required={true}
            errorMessage="This field is required"
          />
          <FormControlInputComponent
            inputName="Last name"
            inputType="string"
            invalid={false}
            placeholder="e.g. Wick"
            required={false}
          />

          <BaseButtonComponent text="Save" onPressAction={() => {}} />
        </VStack>
      </VStack>
    </KeyboardAwareScrollView>
  );
};

export default ProfileView;
