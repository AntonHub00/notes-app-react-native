import { configureStore } from '@reduxjs/toolkit';
import notesSliceReducer from './stores/notesSlice';
import profileInfoSlice from './stores/profileInfoSlice';
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// The configuration we want to set to tell redux-persist how we want to persist
// our state.
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Converts all our reducers into a single one.
const rootReducer = combineReducers({
  notes: notesSliceReducer,
  profileInfo: profileInfoSlice,
});

// Creates a new reducer with all the configuration needed to persist our state.
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  // We will use the "persistent reducer" (which we configured above) instead of
  // the ones that we created (slices).
  reducer: persistedReducer,
  // The middleware will automatically warn anytime it detects non-serializable
  // values in our actions or state but, for this case, we want to ignore all the
  // action types that redux-persist dispatches.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Exports the root state/store so in can be passed to the provider in the
// "root" component.
export default store;

// Exports the types of the root state/store. These are inferred from the store
// itself so it automatically adds the types for new added reducers.
export type RootState = ReturnType<typeof store.getState>;

// Exports the types of the dispatch (actions). These are inferred from the
// store itself so it automatically adds the types for new added reducers.
export type AppDispatch = typeof store.dispatch;
