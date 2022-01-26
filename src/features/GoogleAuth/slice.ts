import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { ProfileType, AuthStateType } from './types';

const initialState: AuthStateType = {
  signedIn: false,
  inProgress: false,
  profile: {
    userId: undefined,
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
      state.profile = { ...action.payload };
    },
    signOut: state => {
      state.signedIn = false;
      state.inProgress = false;
      state.profile = { ...initialState.profile };
    },
    setInProgress: (state, action: PayloadAction<boolean>) => {
      state.inProgress = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signIn, signOut, setInProgress } = authSlice.actions;

//selectors:
export const selectCurrentUser = (state: RootState) => state.auth;

export default authSlice.reducer;
