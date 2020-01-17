import { THEME_TYPES } from '../constants';

export const BLUE = '#4F6D7A';
export const ORANGE = '#D57A66';
export const GREEN = '#00BD9D';
export const PURPLE = '#9E768F';

const commonThemeProps = {
  white: '#FFFFFF',
  border: '#E2E2E2',
  inputText: '#797979',
  lightGrey: '#F0F0F0',
  darkText: '#343434',
};

export const BLUE_THEME = {
  primaryColor: BLUE,
  ...commonThemeProps,
};

export const ORANGE_THEME = {
  primaryColor: ORANGE,
  ...commonThemeProps,
};

export const GREEN_THEME = {
  primaryColor: GREEN,
  ...commonThemeProps,
};
export const PURPLE_THEME = {
  primaryColor: PURPLE,
  ...commonThemeProps,
};

export const getTheme = color => {
  const defaultTheme = { ...BLUE_THEME };

  switch (color) {
    case THEME_TYPES.BLUE.value:
      return BLUE_THEME;
    case THEME_TYPES.ORANGE.value:
      return ORANGE_THEME;
    case THEME_TYPES.GREEN.value:
      return GREEN_THEME;
    case THEME_TYPES.PURPLE.value:
      return PURPLE_THEME;
    default:
      return defaultTheme;
  }
};
