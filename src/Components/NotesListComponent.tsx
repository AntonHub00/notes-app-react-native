import { FlatList } from 'native-base';
import React from 'react';
import { useAppSelector } from '../store/hooks';
import ListItemComponent from './ListItemComponent';

interface Props {
  onNotePress: (id: string) => void;
  onNoteLongPress: () => void;
}

const NotesListComponent: React.FC<Props> = ({
  onNotePress,
  onNoteLongPress,
}) => {
  const notesState = useAppSelector(state => state.notes.notes);
  const searchTerm = useAppSelector(state => state.notes.searchTerm);

  const filteredNotes = () =>
    notesState.filter(
      note =>
        note.title.includes(searchTerm) || note.content.includes(searchTerm),
    );

  return (
    <FlatList
      data={filteredNotes()}
      renderItem={({ item }) => (
        <ListItemComponent
          title={item.title}
          content={item.content}
          onNotePress={() => onNotePress(item.id)}
          onNoteLongPress={onNoteLongPress}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default NotesListComponent;
