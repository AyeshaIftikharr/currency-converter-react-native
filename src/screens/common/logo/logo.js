import React, { useState, useEffect } from 'react';
import { Animated, Keyboard, Platform } from 'react-native';
import {
  StyledView,
  StyledText,
  StyledImageBackground,
  StyledContainer,
  StyledImage,
  LARGE_CONTAINER_SIZE,
  LARGE_IMAGE_SIZE,
  SMALL_CONTAINER_SIZE,
  SMALL_IMAGE_SIZE,
  ANIMATION_DURATION,
} from './styled';

export const Logo = () => {
  const [containerImageWidth] = useState(new Animated.Value(LARGE_CONTAINER_SIZE));
  const [imageWidth] = useState(new Animated.Value(LARGE_IMAGE_SIZE));

  const onShowKeyboard = () => {
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: SMALL_CONTAINER_SIZE,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(imageWidth, {
        toValue: SMALL_IMAGE_SIZE,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  const onHideKeyboard = () => {
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: LARGE_CONTAINER_SIZE,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(imageWidth, {
        toValue: LARGE_IMAGE_SIZE,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  useEffect(() => {
    const name = Platform.OS === 'ios' ? 'Will' : 'Did';
    const keyboardShowListener = Keyboard.addListener(`keyboard${name}Show`, onShowKeyboard);
    const keyboradHideListener = Keyboard.addListener(`keyboard${name}Hide`, onHideKeyboard);

    return () => {
      keyboardShowListener.remove();
      keyboradHideListener.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledView>
      <StyledContainer style={{ width: containerImageWidth, height: containerImageWidth }}>
        <StyledImageBackground resizeMode="contain" source={require('../../../static/images/background.png')}>
          <StyledImage
            style={{ width: imageWidth }}
            resizeMode="contain"
            source={require('../../../static/images/logo.png')}
          />
        </StyledImageBackground>
      </StyledContainer>
      <StyledText>Currency Converter</StyledText>
    </StyledView>
  );
};
