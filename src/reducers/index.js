import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

import { currencyReducer } from './currency';
import { themeReducer } from './theme';
import { favoriteCurrencyReducer } from './favorite-currency';
import { AuthReducer } from './auth';

const rootReducer = combineReducers({
  currency: currencyReducer,
  theme: themeReducer,
  favoriteCurrency: favoriteCurrencyReducer,
  auth: AuthReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'favoriteCurrency'],
  blacklist: ['currency', 'theme'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
