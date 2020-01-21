import React from 'react';
import PropTypes from 'prop-types';
import { StyledView, StyledTouchableOpacity, StyledText } from './styled';

export const CustomButton = ({ text, onPress, icon = null }) => (
  <StyledTouchableOpacity onPress={onPress}>
    <StyledView>
      <StyledText>{text}</StyledText>
      {icon}
    </StyledView>
  </StyledTouchableOpacity>
);

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
