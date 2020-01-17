import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, Image } from './styled';

const ClearButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Image resizeMode="contain" source={require('./images/icon.png')} />
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);

ClearButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default ClearButton;
