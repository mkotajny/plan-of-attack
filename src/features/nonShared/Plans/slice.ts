import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from 'store';
import { PlansStateType, PlanType } from './types';
import { firebaseTransformResponse } from 'api/firebase/firebase.utils';
import { poaApi } from '../../../api/api';

const initialState: PlansStateType = {
  apiRequestInProgress: false,
  plans: [],
};

export const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    setApiProcessingInProgress: (state, action: PayloadAction<boolean>) => {
      state.apiRequestInProgress = action.payload;
    },
    fetchPlans: (state, action: PayloadAction<PlanType[]>) => {
      state.plans = action.payload;
    },
    addPlan: (state, action: PayloadAction<PlanType>) => {
      state.plans.push(action.payload);
      state.apiRequestInProgress = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPlan, fetchPlans, setApiProcessingInProgress } = plansSlice.actions;

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

export const addPlanThunk = (payload: PlanType) => async (dispatch: AppDispatch) => {
  dispatch(setApiProcessingInProgress(true));
  try {
    await dispatch(poaApi.endpoints.addPlan.initiate(payload)).unwrap();
    dispatch(addPlan(payload));
  } catch {
    dispatch(setApiProcessingInProgress(false));
    throw new Error();
  }
};

//selectors:
export const selectPlans = (state: RootState) => state.plans;

export default plansSlice.reducer;
