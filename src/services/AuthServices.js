import * as HTTP from '../utils/http';
import {
  LOCAL_ACCESS_TOKEN,
  LOCAL_REFRESH_TOKEN,
  LOCAL_USER_ID,
} from '../constants/tokens';

export async function login(email, password) {
  console.log('-------------', email, password);
  let response = await HTTP.post(`auth/login`, {
    data: {
      email,
      password,
    },
  });

  if (response) {
    if (response.status === 403) {
      console.log('username and credential not matched');
    }
    if (response.status === 200) {
      storeAllInformation(response.data);
      return response;
    }
  } else {
    console.log(response);
    return {
      error: 'username and password donot match',
    };
  }
}

export async function register(userName, userEmail, userPassword) {
  console.log(userName, userEmail, userPassword);
  let response = await HTTP.post(`register`, {
    data: {
      name: userName,
      email: userEmail,
      password: userPassword,
    },
  });
  console.log(response, 'from register');
  if (response.status === 200) {
    return response;
  }
}

export async function refresh(userId, refreshToken) {
  let response = await HTTP.post(`auth/refresh`, {
    data: {
      user_id: userId,
      refresh_token: refreshToken,
    },
  });
  if (response === undefined) {
    return false;
  }
  if (response.status === 200) {
    return response;
  }
}

/**
 *
 */
export async function logout() {
  try {
    console.log('before ');
    console.log('after');
    let response = await HTTP.post(`auth/logout`, {
      data: {
        userId: getUserId(),
        refreshToken: getRefreshToken(),
      },
    });
    if (response.status === 200) {
      removeAllFromLocalStorage();
      return response;
    }
  } catch (err) {
    console.log(err, 'error from logout');
  }
}

/**
 *
 * @param {*} response
 */
export const storeAllInformation = response => {
  storeAccessToken(response.accessToken);
  storeRefreshToken(response.refreshToken);
  storeUserId(response.id);
};

/**
 *
 * @param {*} accessToken
 */
export const storeAccessToken = accessToken => {
  localStorage.setItem(LOCAL_ACCESS_TOKEN, accessToken);
};

export const storeRefreshToken = refreshToken => {
  localStorage.setItem(LOCAL_REFRESH_TOKEN, refreshToken);
};

export const storeUserId = userId => {
  localStorage.setItem(LOCAL_USER_ID, userId);
};

export const getAccessToken = () => localStorage.getItem(LOCAL_ACCESS_TOKEN);

export const getRefreshToken = () => localStorage.getItem(LOCAL_REFRESH_TOKEN);

export const getUserId = () => localStorage.getItem(LOCAL_USER_ID);

export const removeAllFromLocalStorage = () => {
  localStorage.removeItem(LOCAL_ACCESS_TOKEN);
  localStorage.removeItem(LOCAL_REFRESH_TOKEN);
  localStorage.removeItem(LOCAL_USER_ID);
};
