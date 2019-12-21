import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  REGISTER_CANCELED,
  SAVE_REGISTER_TOKEN,
  DELETE_REGISTER_TOKEN,
  LOGGED_OUT_REGISTER,
} from 'store/actionTypes/registerActionType';

export function registerRequest(
  email: string,
  password: string,
  fullname: string,
  companyName: string,
) {
  return {
    type: REGISTER_REQUEST,
    email,
    password,
    fullname,
    companyName,
  };
}
export function registerSuccess(status: string) {
  return {
    type: REGISTER_SUCCESS,
    status,
  };
}
export function registerError(status: string) {
  return {
    type: REGISTER_ERROR,
    status,
  };
}
export function registerCanceled(status: string) {
  return {
    type: REGISTER_CANCELED,
    status,
  };
}
export function saveRegisterToken(token: string) {
  return {
    type: SAVE_REGISTER_TOKEN,
    token,
  };
}
export function deleteRegisterToken() {
  return {
    type: DELETE_REGISTER_TOKEN,
  };
}
export function loggedOutRegister() {
  return {
    type: LOGGED_OUT_REGISTER,
  };
}
