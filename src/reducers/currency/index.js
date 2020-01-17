import { types } from '../../actions/currency';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrencies: ['GBP'],
  conversions: {},
  error: null,
};

const setConversions = (state, action) => {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {},
  };

  if (state.conversions[action.currency]) {
    conversion = state.conversions[action.currency];
  }

  return {
    ...state.conversions,
    [action.currency]: conversion,
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.currency,
        conversions: setConversions(state, action),
      };
    case types.ADD_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrencies: [...state.quoteCurrencies, action.currency],
      };
    case types.REMOVE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrencies: state.quoteCurrencies.filter(
          quoteCurrency => quoteCurrency !== action.currency,
        ),
      };
    case types.GET_INITIAL_CONVERSION:
      return {
        ...state,
        conversions: setConversions(state, { currency: state.baseCurrency }),
      };
    case types.CONVERSION_RESULT:
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
    case types.CONVERSION_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
