import { THEME_PRIMARY_COLOR_CHANGE } from './types';

export const changePrimaryColor = color =>
  payloadActionCreator({ type: THEME_PRIMARY_COLOR_CHANGE, payload: color });

const emptyActionCreator = type => ({ type });

const payloadActionCreator = ({ type, payload }) => ({ type, payload });
