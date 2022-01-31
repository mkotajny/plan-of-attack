import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from 'store';
import { PlansStateType, PlanPatchRequestType, PlanType } from './types';
import { firebaseTransformResponse, firebaseGetDocumentId } from 'api/firebase/firebase.utils';
import { poaApi } from '../../../api/api';

const initialState: PlansStateType = {
  apiRequestInProgress: false,
  plansList: [],
};

export const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    setApiProcessingInProgress: (state, action: PayloadAction<boolean>) => {
      //state mutation is not forbridden here ! (with redux toolkit)
      state.apiRequestInProgress = action.payload;
    },
    fetchPlans: (state, action: PayloadAction<PlanType[]>) => {
      state.plansList = action.payload;
    },
    addPlan: (state, action: PayloadAction<PlanType>) => {
      state.plansList.push(action.payload);
      state.apiRequestInProgress = false;
    },
    updatePlan: (state, action: PayloadAction<PlanType>) => {
      const foundIndex = state.plansList.findIndex(plan => plan.id === action.payload.id);
      state.plansList[foundIndex as number] = action.payload;
      state.apiRequestInProgress = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchPlans, addPlan, updatePlan, setApiProcessingInProgress } = plansSlice.actions;

//Action creators as Thunks
export const fetchPlansThunk = (payload: string) => async (dispatch: AppDispatch) => {
  dispatch(setApiProcessingInProgress(true));
  try {
    const response = await dispatch(poaApi.endpoints.fetchPlans.initiate(payload)).unwrap();
    if (response.documents) {
      dispatch(fetchPlans(firebaseTransformResponse(response) as PlanType[]));
    }
    dispatch(setApiProcessingInProgress(false));
  } catch {
    dispatch(setApiProcessingInProgress(false));
    throw new Error();
  }
};

export const saveThunk = (payload: PlanPatchRequestType) => async (dispatch: AppDispatch) => {
  const updateExisting = !!payload.id;
  const apiRequest = updateExisting ? poaApi.endpoints.patchPlan : poaApi.endpoints.postPlan;
  const reducerAction = updateExisting ? updatePlan : addPlan;
  dispatch(setApiProcessingInProgress(true));
  try {
    const response = await dispatch(apiRequest.initiate(payload)).unwrap();
    const payloadForReducer = payload;
    if (updateExisting) {
      delete payloadForReducer.id;
    }
    dispatch(reducerAction({ id: firebaseGetDocumentId(response.name), document: payloadForReducer }));
  } catch {
    dispatch(setApiProcessingInProgress(false));
    throw new Error();
  }
};

//selectors:
export const selectPlans = (state: RootState) => state.plans;

export default plansSlice.reducer;
