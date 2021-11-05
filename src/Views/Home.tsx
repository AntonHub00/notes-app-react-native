import React from 'react';
import { Box, FlatList } from 'native-base';
import TopBarComponent from '../Components/TopBarComponent';
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
      <TopBarComponent />
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
    </Box>
  );
};

export default Home;
