import { types } from '../../actions/theme';
import { types as AuthTypes } from '../../actions/auth';
import { THEME_LOOKUP } from '../../theme';
import { THEME_TYPES } from '../../constants';

const initialState = {
  theme: { ...THEME_LOOKUP[THEME_TYPES.BLUE.enum] },
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.THEME_PRIMARY_COLOR_CHANGE:
      return { ...state, theme: { ...THEME_LOOKUP[action.payload] } };
    case AuthTypes.AUTH_LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
