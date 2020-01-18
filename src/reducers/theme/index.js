import { types } from '../../actions/theme';
import { theme } from '../../utils';
import { THEME_TYPES } from '../../constants';

const initialState = {
  theme: { ...theme[THEME_TYPES.BLUE.value] },
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.THEME_PRIMARY_COLOR_CHANGE:
      return { ...state, theme: { ...theme[action.payload] } };
    default:
      return state;
  }
};
