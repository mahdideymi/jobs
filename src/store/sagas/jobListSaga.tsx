import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { jobListError, jobListSuccess } from 'store/actions';
import {
  JOB_LIST_FAILED,
  JOB_LIST_SUCCESS,
  JOB_LIST_REQUEST,
  JOB_LIST_SEARCH,
} from 'store/actionTypes';
import Api from 'Api/api';
import axios from 'axios';

export function getListApi(jobTitle: string, from: number, limit: number) {
  return new Promise(async (resolve, reject) => {
    try {
      let params = {
        params: {
          jobTitle,
          from,
          limit,
        },
      };
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/comments',
        // params,
      );
      // console.log(result.data.slice(0, 10));
      resolve(result.data.slice(0, 10));
    } catch (error) {
      reject(error);
    }
  });
}

export function* getJobList(payload: any) {
  try {
    const result = yield call(
      getListApi,
      payload.jobTitle,
      payload.from,
      payload.limit,
    );

    yield put(jobListSuccess(JOB_LIST_SUCCESS, result));
  } catch (e) {
    yield put(jobListError(JOB_LIST_FAILED));
  }
}

export function* getJobListFlow(): any {
  yield takeLatest(JOB_LIST_REQUEST, getJobList);
}
