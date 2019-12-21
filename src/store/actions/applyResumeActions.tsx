import {
  APPLYRESUME_REQUEST,
  APPLYRESUME_SUCCESS,
  APPLYRESUME_ERROR,
} from 'store/actionTypes/applyResumeActionType';

export function applyResumeRequest(
  fullName: string,
  email: string,
  phoneNumber: string,
  file: boolean,
) {
  return {
    type: APPLYRESUME_REQUEST,
    fullName,
    email,
    phoneNumber,
    file,
  };
}

export function applyResumeSuccess(status: string) {
  return {
    type: APPLYRESUME_SUCCESS,
    status,
  };
}

export function applyResumeError(status: string) {
  return {
    type: APPLYRESUME_ERROR,
    status,
  };
}
