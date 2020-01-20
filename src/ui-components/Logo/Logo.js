import React from 'react';
import { StyledView, StyledText, StyledImageBackground, StyledImage } from './styled';

export const Logo = () => {
  return (
    <StyledView>
      <StyledImageBackground resizeMode='contain' source={require('./images/background.png')}>
        <StyledImage resizeMode='contain' source={require('./images/logo.png')} />
      </StyledImageBackground>
      <StyledText>Currency Converter</StyledText>
    </StyledView>
  );
};
