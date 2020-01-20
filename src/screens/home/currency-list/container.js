import { connect } from 'react-redux';
import { CurrencyList } from './currency-list-screen';
import { actions } from '../../../actions/currency';

const mapStateToProps = ({ currency }) => ({
  baseCurrency: currency.baseCurrency,
});

const mapDispatchToProps = {
  changeBaseCurrency: actions.changeBaseCurrency,
  onAddCurrency: actions.onAddCurrency,
};

export const CurrencyListScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencyList);
