import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { Button } from '../../../src/ui-components/button';
import { CenterView } from '../../decorators/center-view';

import { WHITE, ICON_SIZE } from '../../../src/theme';

storiesOf('Button/Contained', module)
  .addDecorator(getStory => <CenterView dark>{getStory()}</CenterView>)
  .add('default', () => <Button contained onPress={() => action('clicked--default-contained')()} text='Contained' />)
  .add('default disabled', () => (
    <Button contained onPress={() => action('clicked--default-contained')()} text='Disabled' disabled />
  ));

storiesOf('Button/Text', module)
  .addDecorator(getStory => <CenterView dark>{getStory()}</CenterView>)
  .add('default', () => <Button onPress={() => action('clicked-default-text')()} text='Text' />)
  .add('with icon', () => (
    <Button
      text='Text with Icon'
      onPress={() => action('clicked-with-icon-text')()}
      icon={<Icon name='heart' size={ICON_SIZE} color={WHITE} />}
    />
  ));
