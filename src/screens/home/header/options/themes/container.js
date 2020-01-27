import { connect } from 'react-redux';
import { Themes } from './themes-screen';
// actions
import { actions } from '../../../../../actions/theme';

const mapDispatchToProps = {
  changeTheme: actions.changePrimaryColor,
};

export const ThemesScreen = connect(
  null,
  mapDispatchToProps,
)(Themes);
