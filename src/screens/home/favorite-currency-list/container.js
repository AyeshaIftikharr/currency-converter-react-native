import { connect } from 'react-redux';
import { FavoriteCurrencyList } from './favorite-currency-list-screen';
import { actions } from '../../../actions/currency';

const mapStateToProps = ({ currency }) => ({
  baseCurrency: currency.baseCurrency,
});

const mapDispatchToProps = {
  changeBaseCurrency: actions.changeBaseCurrency,
  onAddCurrency: actions.onAddCurrency,
};

export const FavoriteCurrencyListScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoriteCurrencyList);
