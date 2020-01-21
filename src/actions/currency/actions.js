import * as actions from './types';
import { emptyActionCreator, payloadActionCreator } from '../../utils';

export const getInitialConversion = () => emptyActionCreator(actions.CURRENCY_GET_INITIAL_CONVERSION_RATES);

export const changeBaseCurrency = payload => payloadActionCreator(actions.CURRENCY_CHANGE_BASE, payload);

export const onAddCurrency = payload => payloadActionCreator(actions.CURRENCY_QUOTE_CURRENCY_ADD, payload);

export const onRemoveCurrency = payload => payloadActionCreator(actions.CURRENCY_QUOTE_CURRENCY_REMOVE, payload);

export const onMarkCurrencyAsFavorite = payload =>
  payloadActionCreator(actions.CURRENCY_MARK_CURRENCY_AS_FAVORITE, payload);

export const onUnMarkCurrencyFromFavorites = payload =>
  payloadActionCreator(actions.CURRENCY_UNMARK_CURRENCY_FROM_FAVORITES, payload);
