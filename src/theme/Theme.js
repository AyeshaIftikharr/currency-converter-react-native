import * as colors from './colors';

const THEME = {
  white: colors.WHITE,
  border: colors.BORDER,
  inputText: colors.INPUT_TEXT,
  lightGrey: colors.LIGHT_GREY,
  darkText: colors.DARK_TEXT,
  darkButtonBackground: colors.DARK_BLUE,
  disabledBackground: colors.DISABLED_BUTTON,
};

export const ICON_SIZE = 20;
export const INPUT_HEIGHT = 48;
export const BORDER_RADIUS = 4;

export const THEME_LOOKUP = {
  BLUE: {
    primaryColor: colors.BLUE,
    ...THEME,
  },
  ORANGE: {
    primaryColor: colors.ORANGE,
    ...THEME,
  },
  PURPLE: {
    primaryColor: colors.PURPLE,
    ...THEME,
  },
  GREEN: {
    primaryColor: colors.GREEN,
    ...THEME,
  },
};
