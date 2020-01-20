import React from 'react';
import PropTypes from 'prop-types';
// styles
import { StyledView, StyledImage, StyledTouchableOpacity } from './styled';

export const Header = ({ onPress }) => (
  <StyledView>
    <StyledTouchableOpacity onPress={onPress}>
      <StyledImage resizeMode='contain' source={require('./images/gear.png')} />
    </StyledTouchableOpacity>
  </StyledView>
);

Header.propTypes = {
  onPress: PropTypes.func.isRequired,
};
