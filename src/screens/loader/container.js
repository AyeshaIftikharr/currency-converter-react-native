import { connect } from 'react-redux';
import { ScreenLoader as Loader } from './screen-loader';

const mapStateToProps = ({ auth: { isLoggedIn } }) => ({
  isLoggedIn,
});

export const ScreenLoader = connect(mapStateToProps)(Loader);
