import { connect } from 'react-redux';
import loginForm from '../components/stateless/loginForm';
import { setLoginSuccess, setLoginError } from '../actions/authActions';

const mapStateToProps = state => {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
};
const mapDispatchToProps = dispach => {
  return {
    setLoginSuccess: (user, token) => dispach(setLoginSuccess(user, token)),
    setLoginError: () => dispach(setLoginError()),
  };
};
const EnhancedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(loginForm);

export default EnhancedLogin;
