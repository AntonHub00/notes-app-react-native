import { configureStore } from '@reduxjs/toolkit';
import notesSliceReducer from './stores/notesSlice';

const store = configureStore({
  reducer: {
    notes: notesSliceReducer,
  },
});

// Exports the root state/store so in can be passed to the provider in the
// "root" component.
export default store;

// Exports the types of the root state/store. These are inferred from the store
// itself so it automatically adds the types for new added reducers.
export type RootState = ReturnType<typeof store.getState>;

// Exports the types of the dispatch (actions). These are inferred from the
// store itself so it automatically adds the types for new added reducers.
export type AppDispatch = typeof store.dispatch;
