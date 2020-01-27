import React from 'react';
import PropTypes from 'prop-types';
import { StyledView } from './styled';

export function BufferView({ children }) {
  return <StyledView>{children}</StyledView>;
}

BufferView.propTypes = {
  children: PropTypes.node,
};
