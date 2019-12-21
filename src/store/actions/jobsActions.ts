import {
  FETCH_JOBS,
  FETCH_JOBS_FAILED,
  FETCH_JOBS_SUCCESS,
  ADD_JOB,
  ADD_JOB_SUCCESS,
  EDIT_JOB,
  EDIT_JOB_SUCCESS,
  DELETE_JOB,
  DELETE_JOB_SUCCESS,
} from 'store/actionTypes';

import { IJobCard } from 'models';

export const fetchJobs = () => ({
  type: FETCH_JOBS,
});

export const fetchJobsError = () => ({
  type: FETCH_JOBS_FAILED,
});

export const fetchJobsSuccess = (payload: Array<IJobCard>) => ({
  type: FETCH_JOBS_SUCCESS,
  payload,
});

export const addJob = (payload: any) => ({
  type: ADD_JOB,
  payload,
});

export const addJobSuccess = (payload: any) => ({
  type: ADD_JOB_SUCCESS,
  payload,
});

export const editJob = (payload: any) => ({
  type: EDIT_JOB,
  payload,
});

export const editJobSuccess = (payload: any) => ({
  type: EDIT_JOB_SUCCESS,
  payload,
});

export const deleteJob = (id: number) => ({
  type: DELETE_JOB,
  id,
});

export const deleteJobSuccess = (id: number) => ({
  type: DELETE_JOB_SUCCESS,
  id,
});
