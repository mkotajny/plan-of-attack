import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from 'store';
import { signInWithGoogle, auth } from 'api/firebase/firebase.utils';
import { ProfileType, AuthStateType } from './types';

const initialState: AuthStateType = {
  signedIn: false,
  inProgress: false,
  profile: {
    userId: undefined,
    userName: undefined,
    imageUrl: undefined,
    token: undefined,
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

// Action creators as Thunks
export const signInThunk = () => async (dispatch: AppDispatch) => {
  dispatch(setInProgress(true));
  try {
    await signInWithGoogle();
  } catch (e: unknown) {
    dispatch(setInProgress(false));
    throw e;
  }
};

export const toggleAuthSubscribtionThunk = (isCancelled: boolean) => async (dispatch: AppDispatch) => {
  dispatch(setInProgress(true));
  const toggleAuthSubscribtion = auth.onAuthStateChanged(async user => {
    if (!isCancelled) {
      let token = '';
      if (user) {
        await user.getIdToken().then(response => {
          token = response;
        });
      }
      user
        ? dispatch(
            signIn({
              userId: user.uid ? user.uid : undefined,
              userName: user.displayName ? user.displayName : undefined,
              imageUrl: user.photoURL ? user.photoURL : undefined,
              token,
            })
          )
        : dispatch(signOut());
    }
  });
  return toggleAuthSubscribtion;
};

//selectors:
export const selectCurrentUser = (state: RootState) => state.auth;

export default authSlice.reducer;
