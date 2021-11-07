import React, { useState } from 'react';
import { AddIcon, Box, Button } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import NotesListComponent from '../Components/NotesListComponent';
import NoteActionDialogComponent from '../Components/NoteActionDialogComponent';

type Props = NativeStackScreenProps<{ Note: undefined }, 'Note'>;

const HomeView: React.FC<Props> = ({ navigation }) => {
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <>
      <NoteActionDialogComponent
        onDelete={() => {}}
        sheetIsOpen={openSheet}
        closeSheet={() => setOpenSheet(false)}
      />

      <Box h="full">
        <NotesListComponent
          onNotePress={() => navigation.navigate('Note')}
          onNoteLongPress={() => setOpenSheet(true)}
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
