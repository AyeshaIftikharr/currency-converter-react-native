import React from 'react';
import PropTypes from 'prop-types';
import { StyledView, StyledTextInput } from './styled';
import { INPUT_TEXT } from '../../theme';

export const TextInput = props => {
  return (
    <StyledView>
      <StyledTextInput placeholderTextColor={INPUT_TEXT} underlineColorAndroid='transparent' {...props} />
    </StyledView>
  );
};

TextInput.propTypes = {};
