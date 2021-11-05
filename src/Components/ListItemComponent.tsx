import { Text, VStack } from 'native-base';
import React from 'react';

interface Props {
  id: string;
  title: string;
  content: string;
}

const ListItemComponent: React.FC<Props> = ({ title, content }) => {
  return (
    <VStack
      m="1.5"
      p="2"
      space="1"
      borderRadius="sm"
      borderWidth="1"
      borderColor="#aaa"
    >
      <Text fontSize="md" fontWeight="bold">
        title: {title}
      </Text>
      <Text fontSize="xs" color="#555">
        content: {content}
      </Text>
    </VStack>
  );
};

export default ListItemComponent;
