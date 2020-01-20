import PropTypes from 'prop-types';
import React from 'react';
import { TouchableHighlight } from 'react-native';

import { StyledView, StyledText } from './styled';
import Icon from './Icon';

export const ListItem = ({
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
      <StyledView>
        <StyledText>{text}</StyledText>
        {selected ? <Icon visible={visible} checkmark={checkmark} iconBackground={iconBackground} /> : <Icon />}
        {customIcon}
      </StyledView>
    </TouchableHighlight>
  );
};

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  checkmark: PropTypes.bool,
  selected: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
};
