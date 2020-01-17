import { all } from 'redux-saga/effects';

import currencyWatcher from './currency';

export default function* rootSaga() {
  yield all([currencyWatcher()]);
}
