import { THEME_TYPES } from '../constants';
import THEME, { BLUE, GREEN, ORANGE, PURPLE } from '../styles/theme';

export const getTheme = color => {
  const defaultTheme = {
    primaryColor: BLUE,
    ...THEME,
  };

  switch (color) {
    case THEME_TYPES.BLUE.value:
      return defaultTheme;
    case THEME_TYPES.ORANGE.value:
      return {
        primaryColor: ORANGE,
        ...THEME,
      };
    case THEME_TYPES.GREEN.value:
      return {
        primaryColor: GREEN,
        ...THEME,
      };
    case THEME_TYPES.PURPLE.value:
      return {
        primaryColor: PURPLE,
        ...THEME,
      };
    default:
      return defaultTheme;
  }
};
