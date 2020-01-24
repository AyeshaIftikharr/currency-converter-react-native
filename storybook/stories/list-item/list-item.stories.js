import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { ListItem, Separator } from '../../../src/ui-components/list-item';
import { BufferView } from '../../decorators/buffer-view';

import { BLUE, ICON_SIZE } from '../../../src/theme';

storiesOf('ListItem', module)
  .addDecorator(getStory => <BufferView>{getStory()}</BufferView>)
  .add('default', () => <ListItem text='List Item' />)
  .add('clickable list item', () => <ListItem text='List Item' onPress={() => action('clicked-default-text')()} />)
  .add('with selected icon', () => (
    <ListItem selected checkmark visible text="List Item" onPress={() => action('clicked-default-text')()} />
  ))
  .add('with custom icon', () => (
    <ListItem text='List Item' customIcon={<Icon name='heart-o' size={ICON_SIZE + 5} color={BLUE} />} />
  ));
