import { call, put, select, takeLatest, all } from 'redux-saga/effects';

import { getLatestRate } from '../../api';
import { types } from '../../actions/currency';

const fetchLatestConversionRates = function* (action) {
  try {
    let { currency } = action;
    if (!currency) {
      currency = yield select(state => state.currency.baseCurrency);
    }
    const response = yield call(getLatestRate, currency);
    const result = yield response.json();
    if (result.error) {
      yield put({ type: types.CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: types.CONVERSION_RESULT, result });
    }
  } catch (error) {
    yield put({ type: types.CONVERSION_ERROR, error: error.message });
  }
};

function* currencySaga() {
  yield all([
    takeLatest(types.GET_INITIAL_CONVERSION, fetchLatestConversionRates),
    takeLatest(types.CHANGE_BASE_CURRENCY, fetchLatestConversionRates),
  ]);
}

export default currencySaga;
