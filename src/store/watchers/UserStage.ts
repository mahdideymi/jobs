import { takeLatest } from 'redux-saga/effects';
import {
  ASYNC_CHANGE_USER_STAGE,
  ASYNC_CHANGE_ORDER_OF_USER_STAGE,
  ASYNC_CREATE_USER_STAGE,
  ASYNC_FETCH_USER_STAGES,
  ASYNC_REMOVE_USER_STAGE,
  ASYNC_UPDATE_USER_STAGE,
  ASYNC_FETCH_USERS,
} from 'store/actionTypes/UserStage';
import {
  changeUserStage,
  changeOrderOfUserStage,
  createUserStage,
  fetchUserStages,
  removeUserStage,
  updateUserStage,
  fetchUsers
} from 'store/workers/UserStage';

// listening to changing user employment stage
export function* watchChangeUserStage() {
  yield takeLatest(ASYNC_CHANGE_USER_STAGE, changeUserStage);
}

// listening to changing order of each job offers' user's stage
export function* watchChangeOrderOfUserStage() {
  yield takeLatest(ASYNC_CHANGE_ORDER_OF_USER_STAGE, changeOrderOfUserStage);
}

// listening to creating user stage for each job offer
export function* watchCreateUserStage() {
  yield takeLatest(ASYNC_CREATE_USER_STAGE, createUserStage);
}

// listening to fetching users stages according to each job offer
export function* watchFetchUserStages() {
  yield takeLatest(ASYNC_FETCH_USER_STAGES, fetchUserStages);
}

// listening to removing a user stage in a job offer
export function* watchRemoveUserStage() {
  yield takeLatest(ASYNC_REMOVE_USER_STAGE, removeUserStage);
}

// listening to updating user stage according to their stage
export function* watchUpdateUserStage() {
  yield takeLatest(ASYNC_UPDATE_USER_STAGE, updateUserStage);
}


export function* watchFetchUsers() {
  yield takeLatest(ASYNC_FETCH_USERS, fetchUsers)
}