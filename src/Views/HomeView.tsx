import React, { useEffect, useState } from 'react';
import { AddIcon, Box, Button } from 'native-base';
import NotesListComponent from '../Components/NotesListComponent';
import NoteActionDialogComponent from '../Components/NoteActionDialogComponent';
import { RootStackParamList } from '../navigation/CustomNavigatorTypes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  removeNote,
  setIdOfNoteToDelete,
  updateSearchTerm,
} from '../store/stores/notesSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeView: React.FC<Props> = ({ navigation }) => {
  const [openSheet, setOpenSheet] = useState(false);

  const idOfNoteToDeleteState = useAppSelector(
    state => state.notes.idOfNoteToDelete,
  );

  const actionsDispatcher = useAppDispatch();

  useEffect(() => {
    actionsDispatcher(updateSearchTerm({ searchTerm: '' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NoteActionDialogComponent
        onDelete={() => {
          actionsDispatcher(removeNote({ id: idOfNoteToDeleteState }));
          actionsDispatcher(setIdOfNoteToDelete({ id: '' }));
        }}
        sheetIsOpen={openSheet}
        closeSheet={() => setOpenSheet(false)}
      />

      <Box h="full">
        <NotesListComponent
          onNotePress={id => navigation.navigate('Note', { id })}
          onNoteLongPress={id => {
            setOpenSheet(true);
            actionsDispatcher(setIdOfNoteToDelete({ id }));
          }}
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
    </>
  );
};

export default HomeView;
