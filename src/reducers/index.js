import { combineReducers } from 'redux';
import postReducer from './postReducer';
import todoReducer from './todoReducer';
import loginReducer from './auth';

export default combineReducers({
  login: loginReducer,
  posts: postReducer,
  todos: todoReducer,
});
