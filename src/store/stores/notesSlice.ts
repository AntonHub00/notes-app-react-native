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
  },
});

// Exports the actions so we can call the reducer functions in our components
// (e.g. "addNote").
export const { addNote } = notesSlice.actions;

// Exports the store itself so it can be "registered" in the root state/store.
export default notesSlice.reducer;
