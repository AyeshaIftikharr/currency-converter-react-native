import React from 'react';
import { View, Text, ImageBackground, Image } from './styled';

export const Logo = () => {
  return (
    <View>
      <ImageBackground resizeMode='contain' source={require('./images/background.png')}>
        <Image resizeMode='contain' source={require('./images/logo.png')} />
      </ImageBackground>
      <Text>Currency Converter</Text>
    </View>
  );
};
