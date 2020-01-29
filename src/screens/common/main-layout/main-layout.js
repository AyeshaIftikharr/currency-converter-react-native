import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StyledView } from './styled';

export const MainLayout = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <StyledView>{children}</StyledView>
    </TouchableWithoutFeedback>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
