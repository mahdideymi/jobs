import {
  FETCH_USER,
  ASYNC_FETCH_USER,
  FAIL_FETCH_USER,
  REMOVE_USER,
  ASYNC_REMOVE_USER,
  FAIL_REMOVE_USER,
} from 'store/actionTypes';

// fetching details of a single user actions -> start
export const FetchUser = ({ payload }: any) => {
  return {
    type: FETCH_USER,
    payload,
  };
};
export const AsyncFetchUser = ({ payload }: any) => {
  return {
    type: ASYNC_FETCH_USER,
    payload,
  };
};

export const FailFetchUser = () => {
  return {
    type: FAIL_FETCH_USER,
  };
};
// fetching details of a single user actions -> end

// remove a single user actions -> start

export const RemoveUser = ({ payload }: any) => {
  return {
    type: REMOVE_USER,
    payload,
  };
};

export const AsyncRemoveUser = ({ payload }: any) => {
  return {
    type: ASYNC_REMOVE_USER,
    payload,
  };
};

export const FailRemoveUser = () => {
  return {
    type: FAIL_REMOVE_USER,
  };
};

// remove a single user actions -> end
