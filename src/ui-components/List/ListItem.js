import PropTypes from 'prop-types';
import React from 'react';
import { TouchableHighlight } from 'react-native';

import { View, Text } from './styled';
import Icon from './Icon';

const ListItem = ({
  text,
  onPress,
  checkmark = true,
  selected = false,
  visible = true,
  customIcon = null,
  iconBackground,
}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View>
        <Text>{text}</Text>
        {selected ? (
          <Icon visible={visible} checkmark={checkmark} iconBackground={iconBackground} />
        ) : (
            <Icon />
          )}
        {customIcon}
      </View>
    </TouchableHighlight>
  );
};

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  checkmark: PropTypes.bool,
  selected: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
};

export default ListItem;
