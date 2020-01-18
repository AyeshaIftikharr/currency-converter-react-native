import styled from 'styled-components';
import { View, Text, ImageBackground, Image, Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export const StyledView = styled(View)`
  align-items: center;
`;

export const StyledImageBackground = styled(ImageBackground)`
  align-items: center;
  justify-content: center;
  width: ${imageWidth}px;
  height: ${imageWidth}px;
`;

export const StyledImage = styled(Image)`
  width: ${imageWidth / 2}px;
  tint-color: ${({ theme }) => theme.primaryColor};
`;

export const StyledText = styled(Text)`
  font-weight: 600;
  font-size: 28px;
  letter-spacing: -0.5px;
  margin-top: 15px;
  color: ${({ theme }) => theme.white};
`;
