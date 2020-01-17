import { connect } from 'react-redux';
import HomeScreen from './HomeScreen';
import { connectAlert } from '../../ui-components/Alert';
// actions
import { actions } from '../../actions/currency';

const mapStateToProps = ({ currency, theme }) => {
  const { baseCurrency, quoteCurrencies } = currency;
  const conversionSelector = currency.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrencies,
    rates,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    isFetching: conversionSelector.isFetching,
    primaryColor: theme.primaryColor,
    currencyError: currency.error,
  };
};

const mapDispatchToProps = dispatch => ({
  getInitialConversion: () => dispatch(actions.getInitialConversion()),
  onRemoveQuoteCurrency: currency => dispatch(actions.onRemoveCurrency(currency)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(connectAlert(HomeScreen));
