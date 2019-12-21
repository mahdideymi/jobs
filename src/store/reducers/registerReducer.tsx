import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  REGISTER_CANCELED,
  SAVE_REGISTER_TOKEN,
  DELETE_REGISTER_TOKEN,
  LOGGED_OUT_REGISTER,
} from 'store/actionTypes/registerActionType';

const initialState = {
  token: null,
  status: 'logged out register',
};

export function registerReducer(state = initialState, action: any) {
  let newState;

  switch (action.type) {
    case REGISTER_SUCCESS:
      newState = { ...state, status: REGISTER_SUCCESS };
      return newState;
    case REGISTER_ERROR:
      newState = { ...state, status: REGISTER_ERROR };
      return newState;
    case REGISTER_CANCELED:
      newState = { ...state, status: REGISTER_CANCELED };
      return newState;
    case LOGGED_OUT_REGISTER:
      newState = { ...state, status: LOGGED_OUT_REGISTER };
      return newState;
    case SAVE_REGISTER_TOKEN:
      newState = { ...state, token: action.token };
      newState.token = action.token;
      return newState;
    case DELETE_REGISTER_TOKEN:
      newState = { ...state, token: null };
      newState.token = null;
      return newState;
    default:
      return state;
  }
}
