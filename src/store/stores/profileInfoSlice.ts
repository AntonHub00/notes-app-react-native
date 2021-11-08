import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Profile {
  firstName: string;
  lastName?: string;
}

const initialState: Profile = {
  firstName: 'User',
};

export const profileInfoSlice = createSlice({
  name: 'profileInfo',
  initialState,
  reducers: {
    saveProfileInfo: (state, action: PayloadAction<Profile>) => {
      const { firstName, lastName } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
    },
  },
});

// Exports the actions so we can call the reducer functions in our components
// (e.g. "saveProfileInfo").
export const { saveProfileInfo } = profileInfoSlice.actions;

// Exports the store itself so it can be "registered" in the root state/store.
export default profileInfoSlice.reducer;
