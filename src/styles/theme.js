import { THEME_TYPES } from '../constants';

export const DEAFULT_PRIMARY_COLOR = '#4F6D7A';

const commonThemeProps = {
  white: '#FFFFFF',
  border: '#E2E2E2',
  inputText: '#797979',
  lightGrey: '#F0F0F0',
  darkText: '#343434',
  blue: '#4F6D7A',
  orange: '#D57A66',
  green: '#00BD9D',
  purple: '#9E768F',
};

// export const BLUE_THEME = {
//   primaryColor: '#4F6D7A',
//   ...commonThemeProps,
// };

export const BLUE_THEME = {
  primaryColor: '#4F6D7A',
  white: '#FFFFFF',
  border: '#E2E2E2',
  inputText: '#797979',
  lightGrey: '#F0F0F0',
  darkText: '#343434',
  blue: '#4F6D7A',
  orange: '#D57A66',
  green: '#00BD9D',
  purple: '#9E768F',
};

export const ORANGE_THEME = {
  primaryColor: '#D57A66',
  ...commonThemeProps,
};

export const GREEN_THEME = {
  primaryColor: '#00BD9D',
  ...commonThemeProps,
};
export const PURPLE_THEME = {
  primaryColor: '#9E768F',
  ...commonThemeProps,
};

export const getTheme = color => {
  const defaultTheme = { ...BLUE_THEME };

  switch (color) {
    case THEME_TYPES.BLUE:
      return BLUE_THEME;
    case THEME_TYPES.ORANGE:
      return ORANGE_THEME;
    case THEME_TYPES.GREEN:
      return GREEN_THEME;
    case THEME_TYPES.PURPLE:
      return PURPLE_THEME;
    default:
      return defaultTheme;
  }
};
