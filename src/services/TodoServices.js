import * as HTTP from '../utils/http';
import store from '../store';
import { LOCAL_USER_ID } from '../constants/tokens';

export async function getAllTodos(props) {
  try {
    let response = await HTTP.get(`todos`, {
      params: {
        title: props.query,
        page_size: props.pageSize,
      },
    });
    console.log(response.data.data); //returns array
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (err) {
    console.log('error from getAllTodos', err);
  }
}

export async function getTodosById(props) {
  const state = store.getState();
  const userId = state.login.user.id || localStorage.getItem(LOCAL_USER_ID);
  console.log('userid', userId);

  try {
    let response = await HTTP.get(`todos/${userId}`, {
      params: {
        title: props.query,
        page_size: props.pageSize,
      },
    });
    console.log(response.data.data); //returns array
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (err) {
    console.log('error from getAllTodos', err);
  }
}
