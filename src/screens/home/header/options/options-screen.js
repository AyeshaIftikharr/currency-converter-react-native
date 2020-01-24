import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem, Separator } from '../../../../ui-components/list-item';
import { connectAlert } from '../../../common/alert';

import { ICON_COLOR, ICON_SIZE } from '../../../../theme';

const OptionsList = ({ navigation, alertWithType, handleLogout }) => {
  const handlePressThemes = () => navigation.navigate('Themes');

  const handlePressSite = () => {
    Linking.openURL('http://handlebarlabs.com').catch(() =>
      alertWithType('error', 'Sorry!', "Fixer.io can't be opened right now."),
    );
  };

  const onHandleLogout = () => {
    handleLogout();
    navigation.navigate('Auth');
  };

  return (
    <ScrollView>
      <StatusBar translucent={false} barStyle="default" />
      <ListItem
        text="Themes"
        onPress={handlePressThemes}
        customIcon={<Icon name="chevron-right" size={ICON_SIZE} color={ICON_COLOR} />}
      />
      <Separator />
      <ListItem
        text="Fixer.io"
        onPress={handlePressSite}
        customIcon={<Icon name="link" size={ICON_SIZE} color={ICON_COLOR} />}
      />
      <ListItem
        text="Logout"
        onPress={onHandleLogout}
        customIcon={<Icon name="reply" size={ICON_SIZE} color={ICON_COLOR} />}
      />
      <Separator />
    </ScrollView>
  );
};

OptionsList.propTypes = {
  navigation: PropTypes.object.isRequired,
  alertWithType: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export const Options = connectAlert(OptionsList);
