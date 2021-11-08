import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Input, VStack } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RootStackParamList } from '../navigation/CustomNavigatorTypes';
import uuid from 'react-native-uuid';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addNote, removeNote, updateNote } from '../store/stores/notesSlice';

interface CustomInputProps {
  placeholder: string;
  fontSize?: 'sm' | 'lg';
  extraProps?: Object;
  value?: string;
  onChangeText?: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  fontSize,
  value,
  onChangeText,
  ...extraProps
}) => {
  return (
    <Input
      placeholder={placeholder}
      fontSize={fontSize}
      m="1.5"
      borderColor="#aaa"
      selectionColor="#99999980"
      _focus={{ borderColor: '#00838f', borderWidth: '2' }}
      numberOfLines={1}
      multiline={true}
      value={value}
      onChangeText={text => onChangeText?.(text)}
      {...extraProps}
    />
  );
};

type Props = NativeStackScreenProps<RootStackParamList, 'Note'>;

const NoteView: React.FC<Props> = ({ route }) => {
  const notesState = useAppSelector(state => state.notes.notes);
  const actionsDispatcher = useAppDispatch();

  const [noteId, setNoteId] = useState<string>('');
  const [noteTitle, setnoteTitle] = useState<string>('');
  const [noteContent, setnoteContent] = useState<string>('');

  const noteIdRef = useRef<string>();
  noteIdRef.current = noteId;

  const noteTitleRef = useRef<string>();
  noteTitleRef.current = noteTitle;

  const noteContentRef = useRef<string>();
  noteContentRef.current = noteContent;

  const updateNoteTitle = (text: string) => {
    setnoteTitle(text);
    actionsDispatcher(updateNote({ id: noteId, title: text }));
  };

  const updateNoteContent = (text: string) => {
    setnoteContent(text);
    actionsDispatcher(updateNote({ id: noteId, content: text }));
  };

  const createNote = () => {
    const id = String(uuid.v4());

    setNoteId(id);

    actionsDispatcher(addNote({ id, title: '', content: '' }));
  };

  const setNote = () => {
    const currentNote = notesState.find(note => note.id === route.params?.id);

    if (currentNote !== undefined) {
      setNoteId(currentNote.id);
      setnoteTitle(currentNote.title);
      setnoteContent(currentNote.content);
    }
  };

  const deleteNoteIfEmpty = () => {
    if (noteTitleRef.current || noteContentRef.current) {
      return;
    }

    if (noteIdRef.current !== undefined) {
      actionsDispatcher(removeNote({ id: noteIdRef.current }));
    }
  };

  useEffect(() => {
    if (route.params?.id === undefined) {
      createNote();
    } else {
      setNote();
    }

    return deleteNoteIfEmpty;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <KeyboardAwareScrollView>
      <VStack>
        <CustomInput
          placeholder="Title"
          fontSize="lg"
          value={noteTitle}
          onChangeText={text => updateNoteTitle(text)}
          {...{ fontWeight: 'bold' }}
        />
        <CustomInput
          placeholder="Content"
          value={noteContent}
          onChangeText={text => updateNoteContent(text)}
          fontSize="sm"
          {...{ mt: '0' }}
        />
      </VStack>
    </KeyboardAwareScrollView>
  );
};

export default NoteView;
