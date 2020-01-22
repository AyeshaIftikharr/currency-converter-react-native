import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { StyledView, StyledBoldText, StyledText } from './styled';

export const Footer = ({ text, buttonText, onPress }) => (
  <StyledView>
    <StyledText>{text}</StyledText>
    <TouchableOpacity onPress={onPress}>
      <StyledBoldText>{buttonText}</StyledBoldText>
    </TouchableOpacity>
  </StyledView>
);

Footer.propTypes = {
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
