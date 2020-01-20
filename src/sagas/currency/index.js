import { takeLatest, all } from 'redux-saga/effects';

import { types } from '../../actions/currency';
import { fetchLatestConversionRates } from './fetch-conversion-rates';

export const currencyWatcher = function*() {
  yield all([
    takeLatest(types.CURRENCY_GET_INITIAL_CONVERSION_RATES, fetchLatestConversionRates),
    takeLatest(types.CURRENCY_CHANGE_BASE, fetchLatestConversionRates),
  ]);
};
