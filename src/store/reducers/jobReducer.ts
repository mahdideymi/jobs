import {
  FETCH_JOBS_SUCCESS,
  ADD_JOB_SUCCESS,
  EDIT_JOB_SUCCESS,
  DELETE_JOB_SUCCESS,
} from 'store/actionTypes';

import data from './jobs.json';

const PRELOAD = {
  data,
  error: false,
  loading: false,
};

let id = 6;

export const jobReducer = (state = PRELOAD, action: any) => {
  let newState;
  let newData;

  switch (action.type) {
    case FETCH_JOBS_SUCCESS:
      newState = {
        ...state,
        error: false,
        loading: false,
        data: action.payload,
      };
      return newState;
    case ADD_JOB_SUCCESS:
      console.log(action);
      const { title, description } = action.payload;
      const newJob = {
        id: id++,
        title,
        description,
        numOfCandidates: 0,
      };
      newData = [newJob, ...state.data];
      newState = { ...state, data: newData };
      return newState;
    case EDIT_JOB_SUCCESS:
      newData = state.data.map((item: any) =>
        item.id === action.payload.id
          ? {
              ...item,
              title: action.payload.title,
              description: action.payload.description,
            }
          : item,
      );
      newState = { ...state, data: newData };
      return newState;
    case DELETE_JOB_SUCCESS:
      console.log(action);
      newData = state.data.filter((item: any) => item.id !== action.id);
      newState = { ...state, data: newData };
      return newState;
    default:
      return state;
  }
};
