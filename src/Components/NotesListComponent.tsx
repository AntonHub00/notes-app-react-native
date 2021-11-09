import { FlatList } from 'native-base';
import React from 'react';
import { useAppSelector } from '../store/hooks';
import ListItemComponent from './ListItemComponent';

interface Props {
  onNotePress: (id: string) => void;
  onNoteLongPress: (id: string) => void;
}

const NotesListComponent: React.FC<Props> = ({
  onNotePress,
  onNoteLongPress,
}) => {
  const notesState = useAppSelector(state => state.notes.notes);
  const searchTerm = useAppSelector(state => state.notes.searchTerm);

  const filteredNotes = () => {
    const lowerCaseSearchTerm = searchTerm.toLocaleLowerCase();

    return notesState.filter(note => {
      const lowerCaseNoteTitle = note.title.toLocaleLowerCase();
      const lowerCaseNoteContent = note.content.toLocaleLowerCase();

      return (
        lowerCaseNoteTitle.includes(lowerCaseSearchTerm) ||
        lowerCaseNoteContent.includes(lowerCaseSearchTerm)
      );
    });
  };

  return (
    <FlatList
      data={filteredNotes()}
      renderItem={({ item }) => (
        <ListItemComponent
          title={item.title}
          content={item.content}
          onNotePress={() => onNotePress(item.id)}
          onNoteLongPress={() => onNoteLongPress(item.id)}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default NotesListComponent;
