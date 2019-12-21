import {
  APPLYRESUME_SUCCESS,
  APPLYRESUME_ERROR,
} from 'store/actionTypes/applyResumeActionType';

const initialState = {
  status: 'apply',
};

export function applyResumeReducer(state = initialState, action: any) {
  let newState;

  switch (action.type) {
    case APPLYRESUME_SUCCESS:
      newState = { ...state, status: APPLYRESUME_SUCCESS };
      return newState;
    case APPLYRESUME_ERROR:
      newState = { ...state, status: APPLYRESUME_ERROR };
      return newState;
    default:
      return state;
  }
}
