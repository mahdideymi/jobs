import { call, put, delay } from 'redux-saga/effects';
import { ChangeUserStage, FailChangeUserStage, FetchUserStages, FailFetchUserStages, UpdateUserStage, FailChangeOrderOfUserStage, CreateUserStage, FailCreateUserStage, RemoveUserStage, FailRemoveUserStage, ChangeOrderOfUserStage, FetchUsers, FailFetchUsers } from 'store/actions/UserStage'
import axios from 'configs/axios'
import { forwardTo } from 'configs/hisotry'
export function* changeUserStage({ EmployeeId, StageId, JobOfferId }: any) {
    try {
        // const { data } = yield axios.put("/someFakeApi");
        yield put(ChangeUserStage({ EmployeeId, StageId, JobOfferId }));
    } catch (e) {
        yield put(FailChangeUserStage())
    }
}

export function* fetchUserStages({ JobOfferId }: any) {
    try {
        // const { data } = yield axios.get("/someFakeUrl") 
        yield put(FetchUserStages({ JobOfferId }))
    } catch (e) {
        yield put(FailFetchUserStages())
    }
}

export function* updateUserStage({ StageId, JobOfferId, Initiate }: any) {
    try {
        console.log(StageId, JobOfferId, Initiate);
        // const {data} = yeild axios.put("/", {some props here })
        yield put(UpdateUserStage({ StageId, JobOfferId, Initiate }))
    } catch (e) {
        yield put(FailChangeUserStage())
    }
}

export function* createUserStage({ StageName, JobOfferId, Initiate }: any) {
    try {
        // const { data} = yield axios.post("/someFakeUrl", {  some props here  })
        console.log(StageName, JobOfferId, Initiate);
        const newUserStage = { StageName, JobOfferId, Initiate }
        yield put(CreateUserStage({ newUserStage }))
    } catch (e) {
        yield put(FailCreateUserStage())
    }
}

export function* removeUserStage({ StageId, JobOfferId }: any) {
    try {
        // some fake api call should be here 
        yield put(RemoveUserStage({ StageId, JobOfferId }))
    } catch (e) {
        yield put(FailRemoveUserStage())
    }
}

export function* changeOrderOfUserStage({ StageIds, JobOfferId }: any) {
    try {
        // some api call for { change order of user stage }
        const newOrderOfStages = [1, 2, 3, 4, 5]
        yield put(ChangeOrderOfUserStage({ StageIds, JobOfferId, newOrderOfStages }))
    } catch (e) {
        yield put(FailChangeOrderOfUserStage())
    }
}



export function* fetchUsers({ JobOfferId }: any) {
    try {
        // api call here for fetching users
        const listOfUsers = [{ id: 1, name: "Mahmood" }]
        yield put(FetchUsers({ JobOfferId, listOfUsers }))
    } catch (e) {
        yield put(FailFetchUsers())
    }
}