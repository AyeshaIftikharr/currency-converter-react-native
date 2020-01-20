import React from 'react';
import { Provider } from 'react-redux';
import { Navigator } from './routes';
import { ThemeProvider } from './theme/theme-provider';
import { AlertProvider } from './ui-components/Alert';
import { store } from './store';

export const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <AlertProvider>
        <Navigator onNavigationStateChange={null} />
      </AlertProvider>
    </ThemeProvider>
  </Provider>
);
