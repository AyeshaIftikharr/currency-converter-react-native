import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { ThemesScreen } from '../../../src/screens/home/header';
import { BufferView } from '../../decorators/buffer-view';

storiesOf('Theme', module)
  .addDecorator(getStory => <BufferView dark>{getStory()}</BufferView>)
  .add('click to change theme', () => <ThemesScreen navigation={{ goBack: () => console.log('Go Back') }} />);
