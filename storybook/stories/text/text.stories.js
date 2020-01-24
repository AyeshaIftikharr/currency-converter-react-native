import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { Text } from '../../../src/ui-components/text';
import { CenterView } from '../../decorators/center-view';

storiesOf('Text', module)
  .add('default', () => (
    <CenterView dark>
      <Text text='Default Text' />
    </CenterView>
  ))
  .add('default dark', () => (
    <CenterView>
      <Text dark text='Text on a light background' />
    </CenterView>
  ));
