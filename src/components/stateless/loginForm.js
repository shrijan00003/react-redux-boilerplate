import React from 'react';
import { withRouter } from 'react-router-dom';
import * as ROUTE from '../../constants/routes';

const RegisterButton = withRouter(({ history }) => (
  <button
    type="button"
    onClick={() => {
      history.push(ROUTE.REGISTER);
    }}
  >
    Sign Up
  </button>
));

export default () => {
  return (
    <div>
      <form className="todo-form">
        <h1> LogIn </h1>
        <div className="form-row">
          <label htmlFor="user_name">Name:</label>
          <input type="text" id="name" name="user_name" />
        </div>
        <div className="form-row">
          <label htmlFor="user_email">E-mail:</label>
          <input type="email" id="mail" name="user_email" />
        </div>
        <button type="submit" className="button">
          Login
        </button>
        <p>Not Registerd Yet</p>
        <RegisterButton />
      </form>
    </div>
  );
};
