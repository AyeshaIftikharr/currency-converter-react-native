import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar } from 'react-native';
// components
import { ListItem, Separator } from '../../../../../ui-components/list';
import { THEME_TYPES } from '../../../../../constants';

export const Themes = ({ navigation, changeTheme }) => {
  const handlePressTheme = type => {
    changeTheme(type);
    navigation.goBack(null);
  };

  return (
    <ScrollView>
      <StatusBar translucent={false} barStyle='default' />
      <ListItem
        text='Blue'
        onPress={() => handlePressTheme(THEME_TYPES.BLUE.enum)}
        selected
        checkmark={false}
        iconBackground={THEME_TYPES.BLUE.color}
      />
      <Separator />
      <ListItem
        text='Orange'
        onPress={() => handlePressTheme(THEME_TYPES.ORANGE.enum)}
        selected
        checkmark={false}
        iconBackground={THEME_TYPES.ORANGE.color}
      />
      <Separator />
      <ListItem
        text='Green'
        onPress={() => handlePressTheme(THEME_TYPES.GREEN.enum)}
        selected
        checkmark={false}
        iconBackground={THEME_TYPES.GREEN.color}
      />
      <Separator />
      <ListItem
        text='Purple'
        onPress={() => handlePressTheme(THEME_TYPES.PURPLE.enum)}
        selected
        checkmark={false}
        iconBackground={THEME_TYPES.PURPLE.color}
      />
      <Separator />
    </ScrollView>
  );
};

Themes.propTypes = {
  navigation: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
};
