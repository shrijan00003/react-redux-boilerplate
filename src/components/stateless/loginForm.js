import React from 'react';
import { withRouter } from 'react-router-dom';
import * as ROUTE from '../../constants/routes';
import * as AuthService from '../../services/AuthServices';

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

let userEmail = null;
let password = null;

export default ({
  isLoggedIn = false,
  setLoginSuccess = f => f,
  setLoginError = f => f,
}) => {
  return (
    <div>
      <form
        className="todo-form"
        onSubmit={async e => {
          e.preventDefault();
          const res = await AuthService.login(userEmail, password);
          console.log(res.data);

          if (res) {
            const token = {
              accessToken: res.data.accessToken,
              refreshToken: res.data.refreshToken,
            };

            const user = {
              userId: res.data.id,
            };
            setLoginSuccess(user, token);
          } else {
            setLoginError();
          }
        }}
      >
        <h1> LogIn</h1>
        <div className="form-row">
          <label htmlFor="user_email">User Email:</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            onChange={e => {
              userEmail = e.target.value;
            }}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password"> Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={e => {
              password = e.target.value;
            }}
          />
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
