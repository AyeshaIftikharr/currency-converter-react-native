import * as colors from './colors';

const THEME = {
  white: colors.WHITE,
  border: colors.BORDER,
  inputText: colors.INPUT_TEXT,
  lightGrey: colors.LIGHT_GREY,
  darkText: colors.DARK_TEXT,
};

export const ICON_SIZE = 20;
export const INPUT_HEIGHT = 48;
export const BORDER_RADIUS = 4;

export const THEME_LOOKUP = {
  BLUE: {
    primaryColor: colors.BLUE,
    darkBackground: colors.DARK_BLUE,
    disabledBackground: colors.DISABLED_BLUE_BUTTON,
    ...THEME,
  },
  ORANGE: {
    primaryColor: colors.ORANGE,
    darkBackground: colors.DARK_ORANGE,
    disabledBackground: colors.DISABLED_ORANGE_BUTTON,
    ...THEME,
  },
  PURPLE: {
    primaryColor: colors.PURPLE,
    darkBackground: colors.DARK_PURPLE,
    disabledBackground: colors.DISABLED_PURPLE_BUTTON,
    ...THEME,
  },
  GREEN: {
    primaryColor: colors.GREEN,
    darkBackground: colors.DARK_GREEN,
    disabledBackground: colors.DISABLED_GREEN_BUTTON,
    ...THEME,
  },
};
