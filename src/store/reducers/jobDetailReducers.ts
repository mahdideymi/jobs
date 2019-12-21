import {
  JOB_DETAIL_FAILED,
  JOB_DETAIL_SUCCESS,
  JOB_DETAIL_REQUSET,
} from 'store/actionTypes';

const initialState = {
  status: '',
  title: '',
  company: '',
  detail: '',
};

export function jobDetailReducer(state = initialState, action: any) {
  let newState;
  switch (action.type) {
    case JOB_DETAIL_REQUSET:
      newState = { ...state, status: JOB_DETAIL_REQUSET };
      return newState;
    case JOB_DETAIL_SUCCESS:
      newState = {
        ...state,
        status: JOB_DETAIL_SUCCESS,
        title: action.jobDetail.title,
        company: action.jobDetail.company,
        detail: action.detail.detail,
      };
      return newState;
    case JOB_DETAIL_FAILED:
      newState = { ...state, status: JOB_DETAIL_FAILED };
      return newState;
    default:
      return state;
  }
}
