import { connect } from 'react-redux';
import ThemesScreen from './ThemesScreen';
// actions
import { actions } from '../../../../actions/theme';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  changeTheme: color => dispatch(actions.changePrimaryColor(color)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThemesScreen);
