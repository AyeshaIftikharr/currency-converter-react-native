import styled from 'styled-components';
import { View, Text, ImageBackground, Image, Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export const StyledView = styled(View)`
  align-items: center;
`;

export const StyledImageBackground = styled(ImageBackground)`
  align-items: center;
  height: ${imageWidth}px;
  justify-content: center;
  width: ${imageWidth}px;
`;

export const StyledImage = styled(Image)`
  tint-color: ${({ theme }) => theme.primaryColor};
  width: ${imageWidth / 2}px;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.white};
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin-top: 15px;
`;
