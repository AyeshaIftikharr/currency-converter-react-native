import React from 'react';
import PropTypes from 'prop-types';
import { StyledView } from './styled';

export function CenterView({ children, dark }) {
  return <StyledView dark={dark}>{children}</StyledView>;
}

CenterView.propTypes = {
  children: PropTypes.node,
};
