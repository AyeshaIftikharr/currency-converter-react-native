import React from 'react';
import PropTypes from 'prop-types';
import { StyledView, StyledContainedTouchableOpacity, StyledBoldText } from './styled';

export const ContainedButton = ({ text, onPress, disabled }) => (
  <StyledContainedTouchableOpacity disabled={disabled} onPress={onPress}>
    <StyledView>
      <StyledBoldText>{text}</StyledBoldText>
    </StyledView>
  </StyledContainedTouchableOpacity>
);

ContainedButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
