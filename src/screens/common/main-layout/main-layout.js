import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StyledSafeAreaView } from './styled';

export const MainLayout = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <StyledSafeAreaView>{children}</StyledSafeAreaView>
    </TouchableWithoutFeedback>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
