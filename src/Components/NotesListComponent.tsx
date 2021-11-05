import { FlatList } from 'native-base';
import React from 'react';
import ListItemComponent from './ListItemComponent';

const NotesListComponent: React.FC<{ onNotePress: () => void }> = ({
  onNotePress,
}) => {
  const notes = Array(10)
    .fill('')
    .map((_, index) => ({
      id: index + 1,
      title: `Note ${index + 1}`,
      content: `Note ${index + 1} Content`,
    }));

  return (
    <FlatList
      data={notes}
      renderItem={({ item }) => (
        <ListItemComponent
          id={item.id}
          title={item.title}
          content={item.content}
          onNotePress={onNotePress}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default NotesListComponent;
