import { ACTIONS } from '../../constants/login';

const INITIAL_STATE = {
  isLoggedIn: false,
  loginErrorMsg: null,
  token: {
    access: null,
    refresh: null,
  },
  user: {
    id: null,
    name: null,
  },
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_FULFILLLED:
      return {
        ...state,
        ...state.login,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case ACTIONS.LOGIN_REJECTED:
      return {
        ...state,
        ...state.login,
        isLoggedIn: false,
        loginErrorMsg: action.payload.errorMsg,
        user: {},
      };

    case ACTIONS.REFRESH_FULFILLLED:
      return {
        ...state,
        ...state.login,
        token: {
          ...state.token,
          refresh: action.payload.refreshToken,
        },
      };
    case ACTIONS.LOGOUT_FULFILLLED: {
      return {
        state: INITIAL_STATE,
      };
    }
    default:
      return state;
  }
};
export default loginReducer;
