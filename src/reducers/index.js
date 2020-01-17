import { combineReducers } from 'redux';

import currency from './currency';
import theme from './theme';

const rootReducer = combineReducers({
  currency,
  theme,
});

export default rootReducer;
