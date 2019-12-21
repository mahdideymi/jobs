import Api from 'Api/api';
import { takeLatest, put, call } from 'redux-saga/effects';
import { applyResumeError, applyResumeSuccess } from 'store/actions';
import {
  APPLYRESUME_ERROR,
  APPLYRESUME_SUCCESS,
  APPLYRESUME_REQUEST,
} from 'store/actionTypes';

export function applyResumeWorker() {
  return new Promise(async (resolve, reject) => {
    try {
      //todo: here send parameter
    } catch (e) {
      reject(e);
    }
  });
}

export function* applyResumeResult() {
  try {
    const result = yield call(applyResumeWorker); //todo: send parameter
    yield put(applyResumeSuccess(APPLYRESUME_SUCCESS));
  } catch (e) {
    yield put(applyResumeError(APPLYRESUME_ERROR));
  }
}

export function* applyResumeFlow(): any {
  yield takeLatest(APPLYRESUME_REQUEST, applyResumeResult);
}
