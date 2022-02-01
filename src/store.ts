import { AnyAction, configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './features/GoogleAuth/slice';
import tasksReducer from './features/Tasks/slice';
import { authSlice } from './features/GoogleAuth/slice';
import { poaApi } from 'api/api';

const appReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
  [poaApi.reducerPath]: poaApi.reducer,
});

const rootReducer = (state: ReturnType<typeof appReducer> | undefined, action: AnyAction) => {
  if (action.type === authSlice.actions.signOut.type) {
    return appReducer(undefined, { type: undefined });
  }
  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(poaApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
