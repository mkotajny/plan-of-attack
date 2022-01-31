import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PlanDocumentType, PlanPatchRequestType } from '../features/nonShared/Plans/types';
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
    fetchPlans: builder.query<FirebaseFetchResponseType, string>({
      query: authorId => `planOwners/${authorId}/plans`,
    }),
    postPlan: builder.mutation<FirebaseDocumentType, Partial<PlanDocumentType>>({
      query: body => ({
        url: `planOwners/${body.authorId}/plans`,
        method: 'POST',
        body: {
          name: '',
          fields: firebaseRequestsBody(body),
        },
      }),
    }),
    patchPlan: builder.mutation<FirebaseDocumentType, Partial<PlanPatchRequestType>>({
      query: body => ({
        url: `planOwners/${body.authorId}/plans/${body.id}`,
        method: 'PATCH',
        body: {
          name: '',
          fields: firebaseRequestsBody({ authorId: body.authorId, title: body.title }),
        },
      }),
    }),
  }),
});

export const { useFetchPlansQuery, usePostPlanMutation, usePatchPlanMutation } = poaApi;
