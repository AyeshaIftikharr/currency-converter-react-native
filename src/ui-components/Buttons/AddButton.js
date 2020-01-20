import React from 'react';
import PropTypes from 'prop-types';
import { StyledView, StyledTouchableOpacity, StyledText } from './styled';

export const AddButton = ({ text, onPress }) => (
  <StyledTouchableOpacity onPress={onPress}>
    <StyledView>
      <StyledText>{text}</StyledText>
    </StyledView>
  </StyledTouchableOpacity>
);

AddButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
