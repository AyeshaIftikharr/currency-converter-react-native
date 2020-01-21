import * as actions from './types';
import { payloadActionCreator } from '../../utils';

export const onMarkCurrencyAsFavorite = payload =>
  payloadActionCreator(actions.FAVORITE_CURRENCY_MARK_AS_FAVORITE, payload);

export const onUnMarkCurrencyFromFavorites = payload =>
  payloadActionCreator(actions.FAVORITE_CURRENCY_UNMARK_FROM_FAVORITES, payload);
