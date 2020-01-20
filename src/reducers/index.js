import { combineReducers } from 'redux';

import { currencyReducer } from './currency';
import { themeReducer } from './theme';

export const rootReducer = combineReducers({
  currency: currencyReducer,
  theme: themeReducer,
});
