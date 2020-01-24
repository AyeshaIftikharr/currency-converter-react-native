import React from 'react';
import { getStorybookUI, configure } from '@storybook/react-native';
import { ThemeProvider } from 'styled-components';
import { loadStories } from './storyLoader';

import { THEME_LOOKUP } from '../src/theme';

import './rn-addons';

// import stories
configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({ asyncStorage: null, onDeviceUI: false });

export const App = () => (
  <ThemeProvider theme={THEME_LOOKUP.BLUE}>
    <StorybookUIRoot />
  </ThemeProvider>
);
