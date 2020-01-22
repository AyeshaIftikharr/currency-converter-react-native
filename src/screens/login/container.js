import { connect } from 'react-redux';
import { Login } from './login-screen';
import { actions } from '../../actions/auth';

const mapStateToProps = ({ auth: { isLoggedIn } }) => ({
  isLoggedIn,
});

const mapDispatchToProps = {
  handleLogin: actions.onLogin,
};

export const LoginScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
