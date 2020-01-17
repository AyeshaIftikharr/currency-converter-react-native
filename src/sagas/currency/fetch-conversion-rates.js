import { call, put, select } from 'redux-saga/effects';

import { getLatestRate } from '../../api';
import { types } from '../../actions/currency';

export function* fetchLatestConversionRates(action) {
  try {
    let { payload } = action;
    if (!payload) {
      payload = yield select(state => state.currency.baseCurrency);
    }
    const response = yield call(getLatestRate, payload);
    const result = yield response.json();
    if (result.error) {
      yield put({ type: types.CURRENCY_CONVERSION_RATES_FETCH_SUCCESS, error: result.error });
    } else {
      yield put({ type: types.CURRENCY_CONVERSION_RATES_FETCH_FAILURE, result });
    }
  } catch (error) {
    yield put({ type: types.CURRENCY_CONVERSION_RATES_FETCH_FAILURE, error: error.message });
  }
}
