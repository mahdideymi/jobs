import Api from 'Api/api';
import { call, put, take } from 'redux-saga/effects';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from 'store/actionTypes/registerActionType';
import {
  registerSuccess,
  registerError,
  saveRegisterToken,
} from 'store/actions/registerActions';
import { message } from 'antd';
import { loginSuccess, saveToken, loginError } from 'store/actions';
import { LOGIN_SUCCESS, LOGIN_ERROR } from 'store/actionTypes';

export function fakeAutoRise(
  email: string,
  password: string,
  fullName: string,
  companyName: string,
) {
  return new Promise(async (resolve, reject) => {
    let headerConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const result = await Api.post(
        'company/register',
        {
          email: email,
          password: password,
          fullname: fullName,
          companyName: companyName,
        },
        headerConfig,
      )
        .catch((error: any) => {
          if (error.response.status === 400) {
            message.error('حسابی با این ایمیل یا شرکت قبلا ثبت شده است');
          } else {
            message.error('لطفا وضعیت اتصال به اینترنت را بررسی نمایید');
          }
          reject(error);
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

export function deleteToken() {
  return new Promise(async (resolve, reject) => {
    try {
      window.localStorage.setItem('accessToken', '');
      resolve('');
    } catch (e) {
      reject(e);
    }
  });
}

export function* autorize(
  email: string,
  password: string,
  fullName: string,
  companyName: string,
) {
  try {
    const token = yield call(
      fakeAutoRise,
      email,
      password,
      fullName,
      companyName,
    );
    yield put(loginSuccess(LOGIN_SUCCESS));
    //@ts-ignore
    yield put(saveToken(token, localStorage.getItem('refreshToken')));
  } catch (error) {
    yield put(loginError(LOGIN_ERROR));
  }
}

export function* registerFlow() {
  while (true) {
    const { email, password, fullname, companyName } = yield take(
      REGISTER_REQUEST,
    );

    yield call(autorize, email, password, fullname, companyName);
  }
}
