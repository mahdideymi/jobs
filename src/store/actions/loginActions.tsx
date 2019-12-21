import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SAVE_TOKEN,
  DELETE_TOKEN,
} from 'store/actionTypes';

export function loginRequest(email: string, password: string) {
  return {
    type: LOGIN_REQUEST,
    email,
    password,
  };
}

export function loginSuccess(status: string) {
  return {
    type: LOGIN_SUCCESS,
    status,
  };
}

export function loginError(status: string) {
  return {
    type: LOGIN_ERROR,
    status,
  };
}

export function saveToken(token: string, refreshToken: string) {
  return {
    type: SAVE_TOKEN,
    token,
    refreshToken,
  };
}

export function deleteToken() {
  return {
    type: DELETE_TOKEN,
  };
}
