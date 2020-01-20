import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem, Separator } from '../../../ui-components/List';
import { connectAlert } from '../../../ui-components/Alert';

import { ICON_COLOR, ICON_SIZE } from '../../../theme';

const Options = ({ navigation, alertWithType }) => {
  const handlePressThemes = () => navigation.navigate('Themes');

  const handlePressSite = () => {
    Linking.openURL('http://handlebarlabs.com').catch(() =>
      alertWithType('error', 'Sorry!', "Fixer.io can't be opened right now."),
    );
  };

  return (
    <ScrollView>
      <StatusBar translucent={false} barStyle='default' />
      <ListItem
        text='Themes'
        onPress={handlePressThemes}
        customIcon={<Icon name='chevron-right' size={ICON_SIZE} color={ICON_COLOR} />}
      />
      <Separator />
      <ListItem
        text='Fixer.io'
        onPress={handlePressSite}
        customIcon={<Icon name='link' size={ICON_SIZE} color={ICON_COLOR} />}
      />
      <Separator />
    </ScrollView>
  );
};

Options.propTypes = {
  navigation: PropTypes.object.isRequired,
  alertWithType: PropTypes.func.isRequired,
};

export const OptionsScreen = connectAlert(Options);
