import { THEME_PRIMARY_COLOR_CHANGE } from './types';
import { payloadActionCreator } from '../../utils';

export const changePrimaryColor = payload => payloadActionCreator(THEME_PRIMARY_COLOR_CHANGE, payload);
