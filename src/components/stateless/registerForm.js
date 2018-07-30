import React from 'react';

export default () => {
  return (
    <div>
      <form className="todo-form" onSubmit={alert('hello')}>
        <h2>Register Form </h2>
        <div className="form-row">
          <label htmlFor="user_name">Name:</label>
          <input type="text" id="name" name="user_name" />
        </div>
        <div className="form-row">
          <label htmlFor="user_email">E-mail:</label>
          <input type="email" id="mail" name="user_email" />
        </div>
        <div className="form-row">
          <label htmlFor="password">password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form-row">
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
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
