import { connect } from 'react-redux';
import loginForm from '../components/stateless/loginForm';

const EnhancedLogin = connect()(loginForm);

export default EnhancedLogin;
