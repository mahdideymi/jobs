import Api from 'Api/api';
import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  DELETE_TOKEN,
} from 'store/actionTypes';

import {
  loginError,
  loginSuccess,
  saveToken,
  deleteToken,
} from 'store/actions';
import { message } from 'antd';
export function fakeAutoRize(email: string, password: string) {
  return new Promise(async (resolve, reject) => {
    try {
      let headerConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const result = await Api.post(
        'company/login',
        { email, password },
        headerConfig,
      )
        .catch((error: any) => {
          if (error.response.status) {
            message.error(
              'لطفا نام کاربری یا رمز عبور را به درستی وارد نمایید',
            );
          } else if (error.response === undefined) {
            message.error('لطفا وضعیت اینترنت را بررسی نمایید');
          }
        })
        .then((response: any) => {
          window.localStorage.removeItem('accessToken');
          window.localStorage.removeItem('refreshToken');
          window.localStorage.setItem('accessToken', response.data.accessToken);
          window.localStorage.setItem(
            'refreshToken',
            response.data.refreshToken,
          );
          resolve(response.data.accessToken);
        });
    } catch (e) {
      reject(e);
    }
  });
}

export function* deleteTokenWorker() {
  window.localStorage.removeItem('refreshToken');
  window.localStorage.removeItem('accessToken');
  yield put(deleteToken());
}

export function* authorize(email: string, password: string) {
  try {
    const token = yield call(fakeAutoRize, email, password);
    yield put(loginSuccess(LOGIN_SUCCESS));
    //@ts-ignore
    yield put(saveToken(token, localStorage.getItem('accessToken')));
  } catch (error) {
    yield put(loginError(LOGIN_ERROR));
  }
}

export function* loginFlow(): any {
  while (true) {
    const { email, password } = yield take(LOGIN_REQUEST);
    yield call(authorize, email, password);
  }
}

export function* watchDeleteToken() {
  yield take(DELETE_TOKEN);
  yield call(deleteTokenWorker);
}
