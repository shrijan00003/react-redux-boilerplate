import { connect } from 'react-redux';
import registerForm from '../components/stateless/registerForm';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispach => {
  return {};
};

const EnhancedRegister = connect(
  mapStateToProps,
  mapDispatchToProps
)(registerForm);

export default EnhancedRegister;
