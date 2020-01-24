import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { Button } from '../../../src/ui-components/button';
import { CenterView } from '../../decorators/center-view';

import { WHITE, ICON_SIZE } from '../../../src/theme';

storiesOf('Button/Contained', module)
  .addDecorator(getStory => <CenterView dark>{getStory()}</CenterView>)
  .add('default', () => <Button contained onPress={() => action('clicked--default-contained')()} text="Contained" />)
  .add('default disabled', () => (
    <Button contained onPress={() => action('clicked--default-contained')()} text="Disabled" disabled />
  ));

storiesOf('Button/Text', module)
  .addDecorator(getStory => <CenterView dark>{getStory()}</CenterView>)
  .add('default', () => <Button onPress={() => action('clicked-default-text')()} text="Text" />)
  .add('with icon', () => (
    <Button
      text="Text with Icon"
      onPress={() => action('clicked-with-icon-text')()}
      icon={<Icon name="heart" size={ICON_SIZE} color={WHITE} />}
    />
  ));

// storiesOf('Button', module)
// .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
// .add('with text', () => (
//   <Button onPress={() => action('clicked-text')()}>
//     <Text>Hello Button</Text>
//   </Button>
// ))
// .add('with some emoji', () => (
//   <Button onPress={action('clicked-emoji')}>
//     <Text>😀 😎 👍 💯</Text>
//   </Button>
// ));

//   import React from './node_modules/react';

// import { storiesOf } from './node_modules/@storybook/react-native';
// import { linkTo } from './node_modules/@storybook/addon-links';

// import Welcome from './index';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
