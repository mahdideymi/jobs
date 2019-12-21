import { Map, fromJS } from 'immutable'
import {
    CHANGE_USER_STAGE,
    FAIL_CHANGE_USER_STAGE,
    CHANGE_ORDER_OF_USER_STAGE,
    FAIL_CHANGE_ORDER_OF_USER_STAGE,
    CREATE_USER_STAGE,
    FAIL_CREATE_USER_STAGE,
    FETCH_USER_STAGES,
    FAIL_FETCH_USER_STAGES,
    REMOVE_USER_STAGE,
    FAIL_REMOVE_USER_STAGE,
    UPDATE_USER_STAGE,
    FAIL_UPDATE_USER_STAGE,
    FETCH_USERS,
    FAIL_FETCH_USERS,
} from 'store/actionTypes/UserStage';
const initialState = {
    users: [
        { EmployeeId: 1, JobOfferId: 1, StageId: 1, name: "Mahmood" },
        { EmployeeId: 2, JobOfferId: 1, StageId: 2, name: "Mr x" },
        { EmployeeId: 3, JobOfferId: 1, StageId: 3, name: "Mr N" },
        { EmployeeId: 4, JobOfferId: 1, StageId: 4, name: "Mr K" },

    ],
    stages: [
        { stageId: 1, name: "Interview", jobOfferId: 1, Initiate: false },
        { stageId: 2, name: "Employement", jobOfferId: 2, Initiate: false },
        { stageId: 3, name: "X", jobOfferId: 3, Initiate: false },
        { stageId: 4, name: "y", jobOfferId: 4, Initiate: false }
    ]
};

export const UserStageReducer = (state = fromJS(initialState), { type, EmployeeId, StageId, JobOfferId, Initiate, StageIds, listOfUsers, newUser, userStages, newUserStage, createdNewStage, newOrderOfStages }: any): any => {
    switch (type) {
        // fetching some user data -> done
        case FETCH_USERS:
            return state.set('users', listOfUsers)
        case FAIL_FETCH_USERS:
            return state


        // updating a single usr Stage -> toDo
        case UPDATE_USER_STAGE:
            console.log(state.get('stages'));
            return state

        case FAIL_UPDATE_USER_STAGE:
            return state


        // fetch user stages -> done
        case FETCH_USER_STAGES:
            return state.set('stages', userStages)

        case FAIL_FETCH_USER_STAGES:
            return state


        // changing order of user Stage -> toDo
        case CHANGE_ORDER_OF_USER_STAGE:
            return state.set('stages', newOrderOfStages)

        case FAIL_CHANGE_ORDER_OF_USER_STAGE:
            return state






        // creating a new userStage -> done
        case CREATE_USER_STAGE:
            return state.set('stages', state.get('stages').push(newUserStage))
        case FAIL_CREATE_USER_STAGE:
            return state


        // changing user Stage -> toDo
        case CHANGE_USER_STAGE:
            const updater = state.get('users').findIndex((item: any) => {
                return item.id === 0
            })
            console.log(updater);
            return state.get('users')
        case FAIL_CHANGE_USER_STAGE:
            return state

        // removing a user stage -> toDo
        case REMOVE_USER_STAGE:
            const newState = Map(initialState);
            const data = newState.find
            return state

        case FAIL_REMOVE_USER_STAGE:
            return state




        default:
            return state
    }
};
