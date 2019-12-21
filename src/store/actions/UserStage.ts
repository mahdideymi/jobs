import {
    ASYNC_CHANGE_USER_STAGE,
    CHANGE_USER_STAGE,
    FAIL_CHANGE_USER_STAGE,
    FETCH_USER_STAGES,
    UPDATE_USER_STAGE,
    FAIL_UPDATE_USER_STAGE,
    CREATE_USER_STAGE,
    ASYNC_CREATE_USER_STAGE,
    FAIL_CREATE_USER_STAGE,
    ASYNC_REMOVE_USER_STAGE,
    ASYNC_CHANGE_ORDER_OF_USER_STAGE,
    ASYNC_UPDATE_USER_STAGE,
    ASYNC_FETCH_USER_STAGES,
    FAIL_FETCH_USER_STAGES,
    REMOVE_USER_STAGE,
    CHANGE_ORDER_OF_USER_STAGE,
    FAIL_CHANGE_ORDER_OF_USER_STAGE,
    FAIL_REMOVE_USER_STAGE,
    ASYNC_FETCH_USERS, FAIL_FETCH_USERS, FETCH_USERS
} from 'store/actionTypes/';

// changing employment stage of a single user
export const ChangeUserStage = ({ EmployeeId, StageId, JobOfferId, newUser }: any) => {
    return {
        type: CHANGE_USER_STAGE,
        EmployeeId,
        StageId,
        JobOfferId,
        newUser
    };
};
export const AsyncChangeUserStage = ({ EmployeeId, StageId, JobOfferId, newUser }: any) => {
    return {
        type: ASYNC_CHANGE_USER_STAGE,
        EmployeeId,
        StageId,
        JobOfferId,
        newUser
    };
};
export const FailChangeUserStage = () => {
    return {
        type: FAIL_CHANGE_USER_STAGE,
    };
};

// fetching employement stages
export const FetchUserStages = ({ JobOfferId, userStages }: any) => {
    return {
        type: FETCH_USER_STAGES,
        JobOfferId,
        userStages
    };
};
export const AsyncFetchUserStages = ({ JobOfferId, userStages }: any) => {
    return {
        type: ASYNC_FETCH_USER_STAGES,
        JobOfferId,
        userStages
    };
};
export const FailFetchUserStages = () => {
    return {
        type: FAIL_FETCH_USER_STAGES,
    };
};

// updating user stage,  set initiate stage to false
export const UpdateUserStage = ({ StageId, JobOfferId, Initiate = false, newStageName }: any) => {
    return {
        type: UPDATE_USER_STAGE,
        StageId,
        Initiate,
        JobOfferId,
        newStageName
    };
};
export const AsyncUpdateUserStage = ({ StageId, JobOfferId, Initiate = false, newStageName }: any) => {
    return {
        type: ASYNC_UPDATE_USER_STAGE,
        StageId,
        Initiate,
        JobOfferId,
        newStageName
    };
};
export const FailUpdateUserStage = () => {
    return {
        type: FAIL_UPDATE_USER_STAGE,
    };
};

// creating a employment stage
export const CreateUserStage = ({ StageName, JobOfferId, Initiate = false, newUserStage }: any) => {
    return {
        type: CREATE_USER_STAGE,
        StageName,
        JobOfferId,
        Initiate,
        newUserStage
    };
};
export const AsyncCreateUserStage = ({ StageName, JobOfferId, Initiate = false, newUserStage }: any) => {
    return {
        type: ASYNC_CREATE_USER_STAGE,
        StageName,
        JobOfferId,
        Initiate,
        newUserStage
    };
};
export const FailCreateUserStage = () => {
    return {
        type: FAIL_CREATE_USER_STAGE,
    };
};

// removing a employment stage
export const RemoveUserStage = ({ StageId, JobOfferId }: any) => {
    return {
        type: REMOVE_USER_STAGE,
        StageId,
        JobOfferId,
    };
};
export const AsyncRemoveUserStage = ({ StageId, JobOfferId }: any) => {
    return {
        type: ASYNC_REMOVE_USER_STAGE,
        StageId,
        JobOfferId,
    };
};
export const FailRemoveUserStage = () => {
    return {
        type: FAIL_REMOVE_USER_STAGE,
    };
};

// changing order of states

export const ChangeOrderOfUserStage = ({ StageIds, JobOfferId, newOrderOfStages }: any) => {
    return {
        type: CHANGE_ORDER_OF_USER_STAGE,
        StageIds,
        JobOfferId,
        newOrderOfStages
    };
};
export const AsyncChangeOrderOfUserStage = ({ StageId, JobOfferId, newOrderOfStages }: any) => {
    return {
        type: ASYNC_CHANGE_ORDER_OF_USER_STAGE,
        StageId,
        JobOfferId,
        newOrderOfStages
    };
};
export const FailChangeOrderOfUserStage = () => {
    return {
        type: FAIL_CHANGE_ORDER_OF_USER_STAGE,
    };
};



export const FetchUsers = ({ JobOfferId, listOfUsers }: any) => {
    return {
        type: FETCH_USERS,
        JobOfferId,
        listOfUsers
    }
}

export const AsyncFetchUsers = ({ JobOfferId, listOfUsers }: any) => {
    return {
        type: ASYNC_FETCH_USERS,
        JobOfferId,
        listOfUsers
    }
}

export const FailFetchUsers = () => {
    return {
        type: FailFetchUsers
    }
}