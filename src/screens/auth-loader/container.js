import { connect } from 'react-redux';
import { AuthLoadingScreen as LoadingScreen } from './auth-loader';

const mapStateToProps = ({ auth: { isLoggedIn } }) => ({
  isLoggedIn,
});

export const AuthLoadingScreen = connect(mapStateToProps)(LoadingScreen);
