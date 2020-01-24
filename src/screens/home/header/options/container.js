import { connect } from 'react-redux';
import { Options } from './options-screen';
import { actions } from '../../../../actions/auth';

const mapDispatchToProps = {
  handleLogout: actions.onLogOut,
};

export const OptionsScreen = connect(
  null,
  mapDispatchToProps,
)(Options);
