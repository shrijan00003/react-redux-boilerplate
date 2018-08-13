import _axious from 'axios';
import { ENV_CONSTANT } from '../constants/env';
import store from '../store';
import * as AuthService from '../services/AuthServices';
import { refreshLogin } from '../actions/authActions';
import {
  LOCAL_REFRESH_TOKEN,
  LOCAL_USER_ID,
  LOCAL_ACCESS_TOKEN,
} from '../constants/tokens';

const axios = _axious.create();

axios.defaults.baseURL = ENV_CONSTANT.API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

try {
  axios.interceptors.request.use(
    config => {
      let accessToken = localStorage.getItem(LOCAL_ACCESS_TOKEN);

      if (accessToken) config.headers.Authorization = accessToken;
      return config;
    },
    function(err) {
      return Promise.reject(err);
    }
  );
} catch (err) {
  console.log(err, 'error in request interceptor');
}

try {
  axios.interceptors.response.use(
    function(response) {
      return response || {};
    },
    async function(err) {
      const error = err.response;
      let state = store.getState();
      const config = err.config;

      if (error && error.status === 401) {
        let refreshToken =
          state.login.token.refresh ||
          localStorage.getItem(LOCAL_REFRESH_TOKEN);

        let userId = state.login.user.id || localStorage.getItem(LOCAL_USER_ID);

        if (refreshToken) {
          const newTokens = await AuthService.refresh(userId, refreshToken);
          if (newTokens) {
            await AuthService.storeAccessToken(newTokens.data.accessToken);
            await AuthService.storeRefreshToken(newTokens.data.refreshToken);

            return new Promise(async (resolve, reject) => {
              let refreshActionResponse = await store.dispatch(
                refreshLogin(newTokens)
              );
              if (refreshActionResponse) {
                config.headers.Authorization = newTokens.accessToken;
              }
              resolve(axios(config));
            });
          } else {
            AuthService.removeAllFromLocalStorage();
          }
        }
        return Promise.reject(err);
      }
    }
  );
} catch (err) {
  console.log(err, 'error in response');
}

export const post = (uri, options = {}) => {
  const { data } = options;
  return axios({
    method: 'post',
    url: uri,
    data,
  });
};

export const get = (uri, options = {}) => {
  const { params } = options;
  return axios({
    method: 'get',
    url: uri,
    params,
    data: {},
  });
};

export default {
  get,
  post,
};
