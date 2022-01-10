import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { ProfileType, AuthStateType } from './types';

const initialState: AuthStateType = {
  signedIn: false,
  inProgress: true,
  googleInitialized: false,
  profile: {
    fullName: undefined,
    imageUrl: undefined,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<ProfileType>) => {
      state.signedIn = true;
      state.inProgress = false;
      state.profile.fullName = action.payload.fullName;
      state.profile.firstName = action.payload.firstName;
      state.profile.imageUrl = action.payload.imageUrl;
    },
    signOut: state => {
      state.signedIn = false;
      state.inProgress = false;
      state.profile.fullName = undefined;
      state.profile.imageUrl = undefined;
    },
    setInProgress: (state, action: PayloadAction<boolean>) => {
      state.inProgress = action.payload;
    },
    setGoogleInitialize: (state, action: PayloadAction<boolean>) => {
      state.googleInitialized = action.payload;
      state.inProgress = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signIn, signOut, setInProgress, setGoogleInitialize: setGoogleInitialize } = authSlice.actions;

//selectors:
export const selectCurrentUser = (state: RootState) => state.auth;

export default authSlice.reducer;
