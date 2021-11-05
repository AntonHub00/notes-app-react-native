import React from 'react';
import { AddIcon, Box, Button, FlatList } from 'native-base';
import ListItemComponent from '../Components/ListItemComponent';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<{ Note: undefined }, 'Note'>;

const HomeView: React.FC<Props> = ({ navigation }) => {
  const notes = Array(10)
    .fill('')
    .map((_, index) => ({
      id: index + 1,
      title: `Note ${index + 1}`,
      content: `Note ${index + 1} Content`,
    }));

  return (
    <Box h="full">
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <ListItemComponent
            id={item.id}
            title={item.title}
            content={item.content}
          />
        )}
        keyExtractor={item => item.id}
      />
      <Button
        m="4"
        size="16"
        bottom="0"
        right="0"
        position="absolute"
        rounded="full"
        bgColor="#00838f"
        _pressed={{ bgColor: '#005662' }}
        onPress={() => navigation.navigate('Note')}
      >
        <AddIcon size="xs" color="white" />
      </Button>
    </Box>
  );
};

export default HomeView;
