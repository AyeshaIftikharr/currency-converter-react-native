import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { TextInput } from '../../../src/ui-components/text-input';
import { CenterView } from '../../decorators/center-view';

storiesOf('TextInput', module)
  .addDecorator(getStory => <CenterView dark>{getStory()}</CenterView>)
  .add('default', () => <TextInput placeholder='Input' onChaneText={() => action('onChangeText')()} />)
  .add('with button', () => (
    <TextInput
      withButton
      buttonText='Button'
      onChaneText={() => action('on-change-text')()}
      onPress={() => action('on-button-press')()}
    />
  ))
  .add('with button and input disabled', () => (
    <TextInput
      withButton
      editable={false}
      buttonText='Button'
      onChaneText={() => action('on-change-text')()}
      onPress={() => action('on-button-press')()}
    />
  ))
  .add('with icon buttons', () => (
    <TextInput
      withButton
      buttonText='Button'
      onChaneText={() => action('on-change-text')()}
      onPress={() => action('on-button-press')()}
      onMarkAsFavorite={() => action('clicked-on-mark-as-favorite')()}
      onRemove={() => action('clicked-on-remove')()}
    />
  ))
  .add('with icon buttons and disabled input', () => (
    <TextInput
      withButton
      editable={false}
      buttonText='Button'
      onChaneText={() => action('on-change-text')()}
      onPress={() => action('on-button-press')()}
      onMarkAsFavorite={() => action('clicked-on-mark-as-favorite')()}
      onRemove={() => action('clicked-on-remove')()}
    />
  ));
