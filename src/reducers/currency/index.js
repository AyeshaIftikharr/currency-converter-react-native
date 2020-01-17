import { types } from '../../actions/currency';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrencies: ['GBP'],
  conversions: {},
  error: null,
};

const getConversionsFromStoreIfExist = (state, action) => {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {},
  };

  if (state.conversions[action.payload]) {
    conversion = state.conversions[action.payload];
  }

  return {
    ...state.conversions,
    [action.payload]: conversion,
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CURRENCY_CHANGE_BASE:
      return {
        ...state,
        baseCurrency: action.payload,
        conversions: getConversionsFromStoreIfExist(state, action),
      };
    case types.CURRENCY_QUOTE_CURRENCY_ADD:
      return {
        ...state,
        quoteCurrencies: [...state.quoteCurrencies, action.payload],
      };
    case types.CURRENCY_QUOTE_CURRENCY_REMOVE:
      return {
        ...state,
        quoteCurrencies: state.quoteCurrencies.filter(
          quoteCurrency => quoteCurrency !== action.payload,
        ),
      };
    case types.CURRENCY_GET_INITIAL_CONVERSION_RATES:
      return {
        ...state,
        conversions: getConversionsFromStoreIfExist(state, { payload: state.baseCurrency }),
      };
    case types.CURRENCY_CONVERSION_RATES_FETCH_SUCCESS:
      return {
        ...state,
        baseCurrency: action.result.base,
        conversions: {
          ...state.conversions,
          [action.result.base]: {
            isFetching: false,
            ...action.result,
          },
        },
      };
    case types.CURRENCY_CONVERSION_RATES_FETCH_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
