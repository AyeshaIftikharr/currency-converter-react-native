import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './routes';
import ThemeProvider from './styles/themeProvider';
// import { ThemeProvider } from 'styled-components';
import { AlertProvider } from './ui-components/Alert';
import STORE from './store';
import { BLUE_THEME } from './styles/theme';

const App = () => (
  <Provider store={STORE}>
    <ThemeProvider>
      <AlertProvider>
        <Navigator onNavigationStateChange={null} />
      </AlertProvider>
    </ThemeProvider>
  </Provider>
);

export default App;
