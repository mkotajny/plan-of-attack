import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { ProfileType, AuthStateType } from './types';

const initialState: AuthStateType = {
  signedIn: false,
  inProgress: true,
  profile: {
    userName: undefined,
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
      state.profile.userName = action.payload.userName;
      state.profile.imageUrl = action.payload.imageUrl;
    },
    signOut: state => {
      state.signedIn = false;
      state.inProgress = false;
      state.profile.userName = undefined;
      state.profile.imageUrl = undefined;
    },
    setInProgress: state => {
      state.inProgress = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signIn, signOut, setInProgress } = authSlice.actions;

//selectors:
export const selectCurrentUser = (state: RootState) => state.auth;

export default authSlice.reducer;
