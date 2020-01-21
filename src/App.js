import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Navigator } from './routes';
import { ThemeProvider } from './theme/theme-provider';
import { AlertProvider } from './ui-components/alert';
import { store, persistor } from './store';

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
