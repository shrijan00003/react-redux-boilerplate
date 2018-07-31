import { FETCH_TODOS } from './types';
import { getAllTodos, getTodosById } from '../services/TodoServices';

export const fetchTodos = params => async dispatch => {
  const allTodos = await getTodosById(params);
  try {
    dispatch({
      type: FETCH_TODOS,
      payload: allTodos,
    });
  } catch (err) {
    console.log(err);
  }
};
