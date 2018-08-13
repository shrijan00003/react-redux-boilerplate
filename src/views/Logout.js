import React from 'react';
import { connect } from 'react-redux';
import { setLogoutSuccess } from '../actions/authActions';
import * as AuthService from '../services/AuthServices';

class Logout extends React.Component {
  async componentDidMount() {
    await AuthService.logout();
    await this.props.setLogoutSuccess();
  }
  render() {
    return <div>This is Logged Out screen please sign in again</div>;
  }
}
const mapStateToProps = state => {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
};
const mapDispatchToProps = dispach => {
  return {
    setLogoutSuccess: () => dispach(setLogoutSuccess()),
  };
};

const EnhancedLogout = connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);

export default EnhancedLogout;
