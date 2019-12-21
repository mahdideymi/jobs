import {
  JOB_LIST_FAILED,
  JOB_LIST_SUCCESS,
  JOB_LIST_REQUEST,
  JOB_LIST_SEARCH,
} from 'store/actionTypes';

const initialState = {
  dataList: [],
  status: '',
  search: '',
};

export function jobListReducer(state = initialState, action: any): any {
  let newState;

  switch (action.type) {
    case JOB_LIST_REQUEST:
      newState = { ...state, status: JOB_LIST_REQUEST };
      return newState;
    case JOB_LIST_SUCCESS:
      newState = {
        ...state,
        status: JOB_LIST_SUCCESS,
        dataList: [...state.dataList, ...action.dataList],
      };
      return newState;
    case JOB_LIST_FAILED:
      newState = { ...state, status: JOB_LIST_FAILED };
      return newState;
    case JOB_LIST_SEARCH:
      newState = { ...state, status: action.status, search: action.search };
      console.log('newState', newState);

      return newState;
    default:
      return state;
  }
}
