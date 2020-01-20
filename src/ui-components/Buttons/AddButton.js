import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from './styled';

export const AddButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);

AddButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
