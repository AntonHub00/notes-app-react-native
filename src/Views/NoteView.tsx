import { Input, VStack } from 'native-base';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface CustomInputProps {
  placeholder: string;
  fontSize?: 'sm' | 'lg';
  extraProps?: Object;
  onChange?: () => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  fontSize,
  onChange,
  ...extraProps
}) => {
  return (
    <Input
      placeholder={placeholder}
      fontSize={fontSize}
      m="1.5"
      borderColor="#aaa"
      selectionColor="#99999980"
      _focus={{ borderColor: '#00838f', borderWidth: '2' }}
      numberOfLines={1}
      multiline={true}
      onChange={onChange}
      {...extraProps}
    />
  );
};

const NoteView: React.FC = () => {
  return (
    <KeyboardAwareScrollView>
      <VStack>
        <CustomInput
          placeholder="Title"
          fontSize="lg"
          {...{ fontWeight: 'bold' }}
        />
        <CustomInput placeholder="Content" fontSize="sm" {...{ mt: '0' }} />
      </VStack>
    </KeyboardAwareScrollView>
  );
};

export default NoteView;
