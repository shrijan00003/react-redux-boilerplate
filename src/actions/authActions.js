import { LOGIN, ACTIONS } from '../constants/login';

export const loginUser = data => ({
  type: LOGIN,
  payload: data,
});

export const setLoginSuccess = (user = {}, token = {}) => ({
  type: ACTIONS.LOGIN_FULFILLLED,
  payload: {
    user,
    token,
  },
});

export const setLoginError = () => ({
  type: ACTIONS.LOGIN_REJECTED,
});

export const refreshLogin = refreshToken => ({
  type: ACTIONS.REFRESH_FULFILLLED,
  payload: {
    refreshToken,
  },
});

export const setLogoutSuccess = () => ({
  type: ACTIONS.LOGOUT_FULFILLLED,
});
