import { connect } from 'react-redux';
import { Home } from './home-screen';
import { connectAlert } from '../common/alert';
// actions
import { actions } from '../../actions/currency';
import { actions as favoriteCurrencyActions } from '../../actions/favorite-currency';

import { getFormattedDate } from '../../selectors/home';

const mapStateToProps = ({ currency, theme }) => {
  const { baseCurrency, quoteCurrencies } = currency;
  const conversionSelector = currency.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrencies,
    rates,
    lastConvertedDate: getFormattedDate(conversionSelector.date ? new Date(conversionSelector.date) : new Date()),
    isFetching: conversionSelector.isFetching,
    primaryColor: theme.primaryColor,
    currencyError: currency.error,
  };
};

const mapDispatchToProps = {
  getInitialConversion: actions.getInitialConversion,
  onRemoveQuoteCurrency: actions.onRemoveCurrency,
  onMarkCurrencyAsFavorite: favoriteCurrencyActions.onMarkCurrencyAsFavorite,
};

export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(connectAlert(Home));
