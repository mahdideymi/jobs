import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SAVE_TOKEN,
  DELETE_TOKEN,
  LOGGED_OUT,
} from 'store/actionTypes';

const initialState = {
  token: null,
  refreshToken: null,
  status: LOGGED_OUT,
};

export function loginReducer(state = initialState, action: any) {
  let newState;

  switch (action.type) {
    case LOGIN_SUCCESS:
      newState = { ...state, status: LOGIN_SUCCESS };
      return newState;
    case LOGIN_ERROR:
      newState = { ...state, status: LOGIN_ERROR };
      return newState;
    case SAVE_TOKEN:
      newState = {
        ...state,
        token: action.token,
        refreshToken: action.refreshToken,
      };
      newState.token = action.token;
      return newState;
    case DELETE_TOKEN:
      newState = {
        token: null,
        refreshToken: null,
        status: LOGGED_OUT,
      };
      return newState;
    default:
      return state;
  }
}
