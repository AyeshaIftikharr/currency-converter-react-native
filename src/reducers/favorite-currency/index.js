import { types } from '../../actions/favorite-currency';
import { types as AuthTypes } from '../../actions/auth';

const initialState = {
  favoriteCurrencyList: [],
};

export const favoriteCurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FAVORITE_CURRENCY_MARK_AS_FAVORITE:
      return {
        ...state,
        favoriteCurrencyList: [...state.favoriteCurrencyList, action.payload],
      };
    case types.FAVORITE_CURRENCY_UNMARK_FROM_FAVORITES:
      return {
        ...state,
        favoriteCurrencyList: state.favoriteCurrencyList.filter(
          item => item.quoteCurrency !== action.payload.quoteCurrency,
        ),
      };
    case AuthTypes.AUTH_LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
