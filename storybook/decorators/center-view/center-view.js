import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import { StyledView } from './styled';

export function CenterView({ children, dark }) {
  return (
    <StyledView dark={dark}>
      <StatusBar translucent={false} barStyle='light-content' />
      {children}
    </StyledView>
  );
}

CenterView.propTypes = {
  children: PropTypes.node,
};
