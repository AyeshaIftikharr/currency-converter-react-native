import React from 'react';
import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';

import { Provider } from 'react-redux';
import { store } from '../src/store';
import { ThemeProvider } from '../src/theme';

import './rn-addons';

// import stories
configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({ asyncStorage: null, onDeviceUI: false });

export const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <StorybookUIRoot />
    </ThemeProvider>
  </Provider>
);
