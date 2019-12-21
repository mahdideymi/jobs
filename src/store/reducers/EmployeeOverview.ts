import { Map } from 'immutable'
import { FETCH_USER, FAIL_FETCH_USER, REMOVE_USER, FAIL_REMOVE_USER } from 'store/actionTypes';
const initialState = {
    currentUser: {
        name: "",
        addedTime: "",
        lastActivity: "",
        resumeUrl: "",
        contactDetails: {
            email: "",
            phone: ""
        }
    }
}

export const Employee = (state: any = Map(initialState), { type, payload }: any): any => {
    switch (type) {
        case FETCH_USER:
            return state.set('currentUser', payload);
        case FAIL_FETCH_USER:
            return state.set('currentUser', initialState.currentUser)
        case REMOVE_USER:
            return state.set('currentUser', initialState.currentUser)
        case FAIL_REMOVE_USER:
            return state.set('currentUser', initialState.currentUser)
        default:
            return state
    }
}
