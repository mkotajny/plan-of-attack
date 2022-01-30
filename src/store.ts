import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/nonShared/GoogleAuth/slice';
import plansReducer from './features/nonShared/Plans/slice';
import { poaApi } from 'api/api';

const store = configureStore({
  reducer: {
    auth: authReducer,
    plans: plansReducer,
    [poaApi.reducerPath]: poaApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(poaApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
