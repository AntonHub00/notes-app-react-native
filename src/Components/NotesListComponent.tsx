import { FlatList } from 'native-base';
import React from 'react';
import { useAppSelector } from '../store/hooks';
import ListItemComponent from './ListItemComponent';

interface Props {
  onNotePress: () => void;
  onNoteLongPress: () => void;
}

const NotesListComponent: React.FC<Props> = ({
  onNotePress,
  onNoteLongPress,
}) => {
  const notesState = useAppSelector(state => state.notes.notes);

  return (
    <FlatList
      data={notesState}
      renderItem={({ item }) => (
        <ListItemComponent
          id={item.id}
          title={item.title}
          content={item.content}
          onNotePress={onNotePress}
          onNoteLongPress={onNoteLongPress}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default NotesListComponent;
