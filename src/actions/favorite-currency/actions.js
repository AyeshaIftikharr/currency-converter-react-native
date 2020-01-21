import * as actions from './types';
import { payloadActionCreator } from '../../utils';

export const onMarkCurrencyAsFavorite = payload =>
  payloadActionCreator(actions.CURRENCY_MARK_CURRENCY_AS_FAVORITE, payload);

export const onUnMarkCurrencyFromFavorites = payload =>
  payloadActionCreator(actions.CURRENCY_UNMARK_CURRENCY_FROM_FAVORITES, payload);
