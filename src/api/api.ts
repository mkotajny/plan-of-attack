// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PlanType } from '../features/Plans/types';
import { firebaseRequestsBody } from 'firebase/firebase.utils';

// Define a service using a base URL and expected endpoints
export const poaApi = createApi({
  reducerPath: 'poaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://firestore.googleapis.com/v1/projects/${
      process.env.REACT_APP_FIREBASE_PROJECT_ID || ''
    }/databases/(default)/documents/`,
  }),
  endpoints: builder => ({
    getPlanById: builder.query<PlanType, void>({
      query: planId => `plans/${planId}`,
    }),
    addPlanRequest: builder.mutation<PlanType, Partial<PlanType>>({
      query: body => ({
        url: `plans`,
        method: 'POST',
        body: {
          name: '',
          fields: firebaseRequestsBody(body),
        },
      }),
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPlanByIdQuery, useAddPlanRequestMutation } = poaApi;
