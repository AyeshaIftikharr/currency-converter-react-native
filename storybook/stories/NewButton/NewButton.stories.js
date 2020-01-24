import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { ContainedButton } from '../../../src/ui-components/buttons';

storiesOf('ContainedButton', module).add('default', () => {
  <ContainedButton onPress={() => action('tapped-default')()} text='Button' disabled={false} />;
});
