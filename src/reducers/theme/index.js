import { types } from '../../actions/theme';
import { THEME_LOOKUP } from '../../theme';
import { THEME_TYPES } from '../../constants';

const initialState = {
  theme: { ...THEME_LOOKUP[THEME_TYPES.BLUE.value] },
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.THEME_PRIMARY_COLOR_CHANGE:
      return { ...state, theme: { ...THEME_LOOKUP[action.payload] } };
    default:
      return state;
  }
};
