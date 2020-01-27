import React from 'react';
import PropTypes from 'prop-types';
import { StyledView, StyledTouchableOpacity, StyledText } from './styled';

export const Button = ({ text, onPress, disabled, contained = false, icon = null }) => (
  <StyledTouchableOpacity contained={contained} disabled={disabled} onPress={onPress}>
    <StyledView>
      <StyledText>{text}</StyledText>
      {icon}
    </StyledView>
  </StyledTouchableOpacity>
);

Button.propTypes = {
  contained: PropTypes.bool,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  onPress: PropTypes.func.isRequired,
};
