import React from 'react';
import PropTypes from 'prop-types';
import { StyledView, StyledTouchableOpacity, StyledText, StyledImage } from './styled';

export const ClearButton = ({ text, onPress }) => (
  <StyledTouchableOpacity onPress={onPress}>
    <StyledView>
      <StyledImage resizeMode="contain" source={require('./images/icon.png')} />
      <StyledText>{text}</StyledText>
    </StyledView>
  </StyledTouchableOpacity>
);

ClearButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
