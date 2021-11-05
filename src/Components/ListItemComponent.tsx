import { Pressable, Text, VStack } from 'native-base';
import React from 'react';

interface Props {
  id: string;
  title: string;
  content: string;
  onNotePress: () => void;
}

const ListItemComponent: React.FC<Props> = ({
  title,
  content,
  onNotePress,
}) => {
  return (
    <Pressable onPress={() => onNotePress()}>
      {({ isPressed }) => (
        <VStack
          m="1.5"
          p="2"
          space="1"
          borderRadius="sm"
          borderWidth="1"
          borderColor="#aaa"
          bgColor={isPressed ? '#00838f' : '#fff'}
        >
          <Text
            fontSize="md"
            fontWeight="bold"
            color={isPressed ? '#fff' : '#000'}
          >
            title: {title}
          </Text>
          <Text fontSize="xs" color={isPressed ? '#fff' : '#555'}>
            content: {content}
          </Text>
        </VStack>
      )}
    </Pressable>
  );
};

export default ListItemComponent;
