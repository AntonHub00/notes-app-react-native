import React from 'react';
import { AddIcon, Box, Fab, FlatList } from 'native-base';
import ListItemComponent from '../Components/ListItemComponent';

const Home: React.FC = () => {
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
      <Fab
        position="absolute"
        size="sm"
        bgColor="#00838f"
        _pressed={{ bgColor: '#005662' }}
        icon={<AddIcon size="xs" color="white" />}
      />
    </Box>
  );
};

export default Home;
