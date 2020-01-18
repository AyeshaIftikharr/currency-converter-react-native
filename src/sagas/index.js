import { all } from 'redux-saga/effects';

import { currencyWatcher } from './currency';

export const rootSaga = function*() {
  yield all([currencyWatcher()]);
};
