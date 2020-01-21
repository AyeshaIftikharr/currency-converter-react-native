import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { Navigator } from './routes';
import { ThemeProvider } from './theme';

import { AlertProvider } from './ui-components/alert';

export const App = () => (
  <Provider store={store}>
    <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
      <ThemeProvider>
        <AlertProvider>
          <Navigator onNavigationStateChange={null} />
        </AlertProvider>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
