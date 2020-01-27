import React from 'react';
import { StyledView, StyledText, StyledImageBackground, StyledImage } from './styled';

export const Logo = () => {
  return (
    <StyledView>
      <StyledImageBackground resizeMode='contain' source={require('../../../static/images/background.png')}>
        <StyledImage resizeMode='contain' source={require('../../../static/images/logo.png')} />
      </StyledImageBackground>
      <StyledText>Currency Converter</StyledText>
    </StyledView>
  );
};
