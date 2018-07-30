import { connect } from 'react-redux';
import registerForm from '../components/stateless/registerForm';

const EnhancedRegister = connect()(registerForm);

export default EnhancedRegister;
