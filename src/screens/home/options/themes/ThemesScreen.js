import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar } from 'react-native';
// components
import { ListItem, Separator } from '../../../../ui-components/List';
import { THEME_TYPES } from '../../../../constants';

const ThemesScreen = ({ navigation, changeTheme }) => {
  const handlePressTheme = type => {
    changeTheme(type);
    navigation.goBack(null);
  };

  return (
    <ScrollView>
      <StatusBar translucent={false} barStyle="default" />
      <ListItem
        text="Blue"
        onPress={() => handlePressTheme(THEME_TYPES.BLUE.value)}
        selected
        checkmark={false}
        iconBackground={THEME_TYPES.BLUE.color}
      />
      <Separator />
      <ListItem
        text="Orange"
        onPress={() => handlePressTheme(THEME_TYPES.ORANGE.value)}
        selected
        checkmark={false}
        iconBackground={THEME_TYPES.ORANGE.color}
      />
      <Separator />
      <ListItem
        text="Green"
        onPress={() => handlePressTheme(THEME_TYPES.GREEN.value)}
        selected
        checkmark={false}
        iconBackground={THEME_TYPES.GREEN.color}
      />
      <Separator />
      <ListItem
        text="Purple"
        onPress={() => handlePressTheme(THEME_TYPES.PURPLE.value)}
        selected
        checkmark={false}
        iconBackground={THEME_TYPES.PURPLE.color}
      />
      <Separator />
    </ScrollView>
  );
};

ThemesScreen.propTypes = {
  navigation: PropTypes.object,
  changeTheme: PropTypes.func,
};

export default ThemesScreen;
