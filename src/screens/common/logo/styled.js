import styled from 'styled-components';
import { View, Text, ImageBackground, Dimensions, Animated } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export const LARGE_CONTAINER_SIZE = imageWidth;
export const LARGE_IMAGE_SIZE = imageWidth / 2;
export const SMALL_CONTAINER_SIZE = imageWidth / 2;
export const SMALL_IMAGE_SIZE = imageWidth / 4;
export const ANIMATION_DURATION = 250;

export const StyledView = styled(View)`
  align-items: center;
`;

export const StyledContainer = styled(Animated.View)`
  align-items: center;
  height: ${({ height }) => height}px;
  justify-content: center;
  width: ${({ width }) => width}px;
`;

export const StyledImageBackground = styled(ImageBackground)`
  align-items: center;
  align-self: stretch;
  flex: 1;
  justify-content: center;
`;

export const StyledImage = styled(Animated.Image)`
  tint-color: ${({ theme }) => theme.primaryColor};
  width: ${({ width }) => width}px;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin-top: 15px;
`;
