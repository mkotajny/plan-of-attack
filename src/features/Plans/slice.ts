import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { PlansStateType, PlanType } from './types';

const initialState: PlansStateType = {
  plans: [],
};

export const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    addPlan: (state, action: PayloadAction<PlanType>) => {
      const existingDuplicate = state.plans.find(item => item.authorId === action.payload.authorId);
      if (!existingDuplicate) {
        state.plans.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPlan } = plansSlice.actions;

//selectors:
export const selectPlans = (state: RootState) => state.plans;

export default plansSlice.reducer;
