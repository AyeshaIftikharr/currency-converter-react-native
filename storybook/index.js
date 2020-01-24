import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';

import './rn-addons';

// import stories
configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({ onDeviceUI: false });

export const App = StorybookUIRoot;
