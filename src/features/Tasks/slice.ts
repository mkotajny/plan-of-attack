import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from 'store';
import { TaskStateType, TaskPatchRequestType, TaskDeleteRequestType, TaskType } from './types';
import { firebaseResponseTransform, firebaseGetDocumentId } from 'api/firebase/firebase.utils';
import { poaApi } from '../../api/api';

const initialState: TaskStateType = {
  apiRequestInProgress: false,
  tasksList: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setApiProcessingInProgress: (state, action: PayloadAction<boolean>) => {
      //state mutation is not forbridden here ! (with redux toolkit)
      state.apiRequestInProgress = action.payload;
    },
    fetchTasks: (state, action: PayloadAction<TaskType[]>) => {
      state.tasksList = action.payload;
    },
    addTask: (state, action: PayloadAction<TaskType>) => {
      state.tasksList.push(action.payload);
      state.apiRequestInProgress = false;
    },
    updateTask: (state, action: PayloadAction<TaskType>) => {
      const foundIndex = state.tasksList.findIndex(task => task.id === action.payload.id);
      state.tasksList[foundIndex as number] = action.payload;
      state.apiRequestInProgress = false;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const foundIndex = state.tasksList.findIndex(task => task.id === action.payload);
      state.tasksList.splice(foundIndex, 1);
      state.apiRequestInProgress = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchTasks, addTask, updateTask, deleteTask, setApiProcessingInProgress } = tasksSlice.actions;

//Action creators as Thunks
export const fetchTasksThunk = (payload: string) => async (dispatch: AppDispatch) => {
  dispatch(setApiProcessingInProgress(true));
  try {
    const response = await dispatch(poaApi.endpoints.fetchTasks.initiate(payload)).unwrap();
    if (response.documents) {
      dispatch(fetchTasks(firebaseResponseTransform(response) as TaskType[]));
    }
    dispatch(setApiProcessingInProgress(false));
  } catch {
    dispatch(setApiProcessingInProgress(false));
    throw new Error();
  }
};

export const deleteThunk = (payload: TaskDeleteRequestType) => async (dispatch: AppDispatch) => {
  dispatch(setApiProcessingInProgress(true));
  try {
    await dispatch(poaApi.endpoints.deleteTask.initiate(payload)).unwrap();
    dispatch(deleteTask(payload.taskId));
  } catch {
    dispatch(setApiProcessingInProgress(false));
    throw new Error();
  }
};

export const saveThunk = (payload: TaskPatchRequestType) => async (dispatch: AppDispatch) => {
  const updateExisting = !!payload.id;
  const apiRequest = updateExisting ? poaApi.endpoints.patchTask : poaApi.endpoints.postTask;
  const reducerAction = updateExisting ? updateTask : addTask;
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
export const selectTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
