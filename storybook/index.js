// import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';

// import stories
configure(() => {
  require('./stories');
  require('./stories/NewButton/NewButton.stories');
}, module);

const StorybookUIRoot = getStorybookUI({ onDeviceUI: false });

export default StorybookUIRoot;
