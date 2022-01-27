import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from 'redux/store';
import { PlansStateType, PlanType } from './types';
import { poaApi } from '../../api/api';

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
    addPlan: (state, action: PayloadAction<PlanType>) => {
      const existingDuplicate = state.plans.find(item => item.title === action.payload.title);
      if (!existingDuplicate) {
        state.plans.push(action.payload);
      }
      state.apiRequestInProgress = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPlan, setApiProcessingInProgress } = plansSlice.actions;

//Action creators as Thunks
export const addPlanThunk = (payload: PlanType) => async (dispatch: AppDispatch) => {
  dispatch(setApiProcessingInProgress(true));
  try {
    await dispatch(poaApi.endpoints.addPlanRequest.initiate(payload)).unwrap();
    dispatch(addPlan(payload));
  } catch {
    dispatch(setApiProcessingInProgress(false));
    throw new Error();
  }
};

//selectors:
export const selectPlans = (state: RootState) => state.plans;

export default plansSlice.reducer;
