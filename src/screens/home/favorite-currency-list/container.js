import { connect } from 'react-redux';
import { FavoriteCurrencyList } from './favorite-currency-list-screen';
import { actions } from '../../../actions/favorite-currency';

const mapStateToProps = ({ favoriteCurrency: { favoriteCurrencyList } }) => ({
  favoriteCurrencyList,
});

const mapDispatchToProps = {
  onUnMarkCurrencyFromFavorites: actions.onUnMarkCurrencyFromFavorites,
};

export const FavoriteCurrencyListScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoriteCurrencyList);
