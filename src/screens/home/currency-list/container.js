import { connect } from 'react-redux';
import { CurrencyList } from './CurrencyListScreen';
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
