import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from './styled';

const Header = ({ onPress }) => (
  <View>
    <TouchableOpacity onPress={onPress}>
      <Image resizeMode='contain' source={require('./images/gear.png')} />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Header;
