import { takeEvery, put, call } from 'redux-saga/effects';
import { jobDetailFailed, jobDetailSuccess } from 'store/actions';
import {
  JOB_DETAIL_FAILED,
  JOB_DETAIL_SUCCESS,
  JOB_DETAIL_REQUSET,
} from 'store/actionTypes';
import get from 'axios';

export function getJobDetailWorker() {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await get('some url');
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
}

export function* jobDetail() {
  try {
    const result = yield call(getJobDetailWorker);
    //bug in result and jobDetail: interface
    yield put(jobDetailSuccess(JOB_DETAIL_SUCCESS, result));
  } catch (error) {
    yield put(jobDetailFailed(JOB_DETAIL_FAILED));
  }
}

export function* jobDetailFlow(): any {
  yield takeEvery(JOB_DETAIL_REQUSET, jobDetail);
}
