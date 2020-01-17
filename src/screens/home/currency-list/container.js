import { connect } from 'react-redux';
import CurrencyListScreen from './CurrencyListScreen';
import { actions } from '../../../actions/currency';

const mapStateToProps = ({ currency, theme }) => ({
  baseCurrency: currency.baseCurrency,
  primaryColor: theme.primaryColor,
});

const mapDispatchToProps = dispatch => ({
  changeBaseCurrency: currency => dispatch(actions.changeBaseCurrency(currency)),
  onAddCurrency: currency => dispatch(actions.onAddCurrency(currency)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencyListScreen);
