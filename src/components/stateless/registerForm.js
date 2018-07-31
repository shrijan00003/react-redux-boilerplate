import React from 'react';
import * as AuthService from '../../services/AuthServices';

let userName = null;
let userEmail = null;
let password = null;
let confirmPassword = null;

export default () => {
  return (
    <div>
      <form
        className="todo-form"
        onSubmit={async e => {
          e.preventDefault();
          if (password === confirmPassword) {
            const res = await AuthService.register(
              userName,
              userEmail,
              password
            );
          } else {
            console.log('password and confirm-password incorrect');
          }
        }}
      >
        <h2>Register Form </h2>
        <div className="form-row">
          <label htmlFor="user_name">Name:</label>
          <input
            type="text"
            id="name"
            name="user_name"
            onChange={e => {
              userName = e.target.value;
            }}
          />
        </div>
        <div className="form-row">
          <label htmlFor="user_email">E-mail:</label>
          <input
            type="email"
            id="mail"
            name="user_email"
            onChange={e => {
              userEmail = e.target.value;
            }}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password">password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={e => {
              password = e.target.value;
            }}
          />
        </div>
        <div className="form-row">
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={e => {
              confirmPassword = e.target.value;
            }}
          />
        </div>
        <button type="submit" className="s-button">
          Register
        </button>
        <button type="button" className="s-button">
          Cancel
        </button>
      </form>
    </div>
  );
};
