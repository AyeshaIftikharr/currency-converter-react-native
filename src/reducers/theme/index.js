import { types } from '../../actions/theme';
import { getTheme } from '../../utils';

const initialState = {
  theme: { ...getTheme() },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.THEME_PRIMARY_COLOR_CHANGE:
      return { ...state, theme: getTheme(action.payload) };
    default:
      return state;
  }
};
