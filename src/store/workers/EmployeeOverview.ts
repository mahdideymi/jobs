import { call, put, delay } from 'redux-saga/effects';
import { FetchUser, FailFetchUser, RemoveUser, FailRemoveUser } from 'store/actions'
import axios from 'configs/axios'
import { forwardTo } from 'configs/hisotry'
const fakeUserObject = {
    name: "Mahmood",
    addedTime: "Last Year",
    lastActivity: "Just a moment ago",
    resumeUrl: "http://google.com",
    contactDetails: {
        email: "mahmood.bagheri@gmail.com",
        phone: "09334319058"
    }
}
export function* fetchUser({ payload }: any) {
    try {
        // console.log(payload);
        // const { data } = yield axios.get("/fetchSingleUserFakeApi");
        yield put(FetchUser({ payload: fakeUserObject }));
    } catch (e) {
        yield put(FailFetchUser())
    }
}

export function* removeUser({ payload }: any) {
    try {
        console.log(payload);
        // const { data } = yield axios.delete(`/user/remove/${payload}`);
        yield put(RemoveUser({ payload }))
        yield call(forwardTo, "/dashboard");
        // remove ke ok shod should redirect to dashboard page
    }
    catch (e) {
        yield put(FailRemoveUser())
    }
}