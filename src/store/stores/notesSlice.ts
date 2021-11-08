import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Note {
  id: string;
  title?: string;
  content?: string;
}

interface NoteState {
  notes: Note[];
}

const initialState: NoteState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes = [...state.notes, action.payload];
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      const { id, title, content } = action.payload;

      state.notes = state.notes.map(note => {
        if (note.id === id) {
          const titleValue = title ?? note.title;
          const contentValue = content ?? note.content;
          return { id, title: titleValue, content: contentValue };
        }

        return note;
      });
    },
    removeNote: (state, action: PayloadAction<{ id: string }>) => {
      state.notes = state.notes.filter(note => note.id !== action.payload.id);
    },
  },
});

// Exports the actions so we can call the reducer functions in our components
// (e.g. "addNote").
export const { addNote, updateNote, removeNote } = notesSlice.actions;

// Exports the store itself so it can be "registered" in the root state/store.
export default notesSlice.reducer;
