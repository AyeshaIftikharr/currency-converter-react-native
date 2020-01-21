import { connect } from 'react-redux';
import { FavoriteCurrencyList } from './favorite-currency-list-screen';
import { actions } from '../../../actions/currency';

const mapStateToProps = ({ currency: { favoriteCurrencyList } }) => ({
  favoriteCurrencyList,
});

const mapDispatchToProps = {
  onUnMarkCurrencyFromFavorites: actions.onUnMarkCurrencyFromFavorites,
};

export const FavoriteCurrencyListScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoriteCurrencyList);
