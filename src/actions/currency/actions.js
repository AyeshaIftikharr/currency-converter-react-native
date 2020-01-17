import * as actions from './types';

export const getInitialConversion = () => ({
  type: actions.GET_INITIAL_CONVERSION,
});

export const changeBaseCurrency = currency => ({
  type: actions.CHANGE_BASE_CURRENCY,
  currency,
});

export const onAddCurrency = currency => ({
  type: actions.ADD_QUOTE_CURRENCY,
  currency,
});

export const onRemoveCurrency = currency => ({
  type: actions.REMOVE_QUOTE_CURRENCY,
  currency,
});
