import * as actions from './types';

export const getInitialConversion = () =>
  emptyActionCreator(actions.CURRENCY_GET_INITIAL_CONVERSION_RATES);

export const changeBaseCurrency = currency =>
  payloadActionCreator({
    type: actions.CURRENCY_CHANGE_BASE,
    payload: currency,
  });

export const onAddCurrency = currency =>
  payloadActionCreator({
    type: actions.CURRENCY_QUOTE_CURRENCY_ADD,
    payload: currency,
  });

export const onRemoveCurrency = currency =>
  payloadActionCreator({
    type: actions.CURRENCY_QUOTE_CURRENCY_REMOVE,
    payload: currency,
  });

const emptyActionCreator = type => ({ type });

const payloadActionCreator = ({ type, payload }) => ({ type, payload });
