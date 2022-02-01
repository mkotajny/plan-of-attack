import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TaskDocumentType, TaskPatchRequestType, TaskDeleteRequestType } from '../features/Tasks/types';
import { firebaseRequestsBody } from 'api/firebase/firebase.utils';
import { FirebaseFetchResponseType, FirebaseDocumentType } from 'api/firebase/types';
import { RootState } from 'store';

export const poaApi = createApi({
  reducerPath: 'poaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://firestore.googleapis.com/v1/projects/${
      process.env.REACT_APP_FIREBASE_PROJECT_ID || ''
    }/databases/(default)/documents/`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.profile.token;
      if ((getState() as RootState).auth.profile.token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    fetchTasks: builder.query<FirebaseFetchResponseType, string>({
      query: authorId => `planOwners/${authorId}/tasks`,
    }),
    postTask: builder.mutation<FirebaseDocumentType, Partial<TaskDocumentType>>({
      query: body => ({
        url: `planOwners/${body.authorId}/tasks`,
        method: 'POST',
        body: { fields: firebaseRequestsBody(body) },
      }),
    }),
    patchTask: builder.mutation<FirebaseDocumentType, Partial<TaskPatchRequestType>>({
      query: body => ({
        url: `planOwners/${body.authorId}/tasks/${body.id}`,
        method: 'PATCH',
        body: { fields: firebaseRequestsBody({ authorId: body.authorId, title: body.title }) },
      }),
    }),
    deleteTask: builder.mutation<void, Partial<TaskDeleteRequestType>>({
      query: body => ({
        url: `planOwners/${body.authorId}/tasks/${body.taskId}`,
        method: 'DELETE',
      }),
    }),
  }),
});
