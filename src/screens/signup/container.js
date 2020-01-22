import { connect } from 'react-redux';
import { Signup } from './signup-screen';
import { actions } from '../../actions/auth';

const mapDispatchToProps = {
  handleSignup: actions.onLogin,
};

export const SignupScreen = connect(
  null,
  mapDispatchToProps,
)(Signup);
