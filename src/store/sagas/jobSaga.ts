import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';

import {
  FETCH_JOBS,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILED,
  ADD_JOB,
  ADD_JOB_SUCCESS,
  ADD_JOB_FAILED,
  EDIT_JOB,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_FAILED,
  DELETE_JOB,
  DELETE_JOB_SUCCESS,
  DELETE_JOB_FAILED,
} from 'store/actionTypes';

const headers = {
  Authorization: 'hmac ' + localStorage.getItem('accessToken'),
};

const endpoint = (method: any, options: any) =>
  axios.request({
    method,
    url: 'https://jsonplaceholder.typicode.com/posts',
    headers: options.headers,
    data: options.data,
  });

function* fetchJobsWorker() {
  try {
    // const result = yield call(endpoint, 'GET', {});
    // console.log(result);
    // yield put({ type: FETCH_JOBS_SUCCESS, payload: 'result' });
  } catch (e) {
    yield put({ type: FETCH_JOBS_FAILED });
  }
}

function* addJobWorker(action: any) {
  const data = action.payload;
  try {
    // yield call(endpoint, 'POST', { data });
    yield put({ type: ADD_JOB_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: ADD_JOB_FAILED });
  }
}

function* editJobWorker(action: any) {
  const data = action.payload;
  try {
    // yield call(endpoint, 'PUT', { data });
    yield put({ type: EDIT_JOB_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: EDIT_JOB_FAILED });
  }
}

function* deleteJobWorker({ id }: any) {
  console.log(id);
  const data = { id };
  try {
    // yield call(endpoint, 'DELETE', { data });
    yield put({ type: DELETE_JOB_SUCCESS, id });
  } catch (e) {
    yield put({ type: DELETE_JOB_FAILED });
  }
}

export function* watchFetchJobs() {
  yield takeLatest(FETCH_JOBS, fetchJobsWorker);
}

export function* watchAddJob() {
  yield takeLatest(ADD_JOB, addJobWorker);
}

export function* watchEditJob() {
  yield takeLatest(EDIT_JOB, editJobWorker);
}

export function* watchDeleteJob() {
  yield takeLatest(DELETE_JOB, deleteJobWorker);
}
