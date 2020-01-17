import styled from 'styled-components';
import {
  View as NativeView,
  Text as NativeText,
  ImageBackground as NativeBImage,
  Image as NativeImage,
  Dimensions,
} from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export const View = styled(NativeView)`
  align-items: center;
`;

export const ImageBackground = styled(NativeBImage)`
  align-items: center;
  justify-content: center;
  width: ${imageWidth}px;
  height: ${imageWidth}px;
`;

export const Image = styled(NativeImage)`
  width: ${imageWidth / 2}px;
  tint-color: ${({ theme }) => theme.primaryColor};
`;

export const Text = styled(NativeText)`
  font-weight: 600;
  font-size: 28px;
  letter-spacing: -0.5px;
  margin-top: 15px;
  color: ${({ theme }) => theme.white};
`;
