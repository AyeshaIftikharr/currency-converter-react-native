import { connect } from 'react-redux';
import CurrencyListScreen from './CurrencyListScreen';
import { actions } from '../../../actions/currency';

const mapStateToProps = ({ currency }) => ({
  baseCurrency: currency.baseCurrency,
});

const mapDispatchToProps = dispatch => ({
  changeBaseCurrency: currency => dispatch(actions.changeBaseCurrency(currency)),
  onAddCurrency: currency => dispatch(actions.onAddCurrency(currency)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencyListScreen);
