import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './styled';

export const Text = ({ text, dark = false }) => <StyledText dark={dark}>{text}</StyledText>;

Text.propTypes = {
  text: PropTypes.string.isRequired,
};
