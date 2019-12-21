import { takeLatest } from 'redux-saga/effects';
import { ASYNC_FETCH_USER, ASYNC_REMOVE_USER } from 'store/actionTypes'
import { fetchUser, removeUser } from 'store/workers'


export function* watchFetchUser() {
    yield takeLatest(ASYNC_FETCH_USER, fetchUser);
}


export function* watchRemoveUser() {
    yield takeLatest(ASYNC_REMOVE_USER, removeUser)
}