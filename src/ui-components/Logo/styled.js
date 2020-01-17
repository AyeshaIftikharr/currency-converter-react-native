import EStyleSheet from 'react-native-extended-stylesheet';
import styled from 'styled-components';
import {
  View as NativeView,
  Text as NativeText,
  ImageBackground as NativeBImage,
  Image as NativeImage,
  Dimensions,
} from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainerSize',
    height: '$largeContainerSize',
  },
  backgroundImage: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flex: 1,
  },
  image: {
    width: '$largeImageSize',
    tintColor: '$primaryBlue',
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    color: '$white',
  },
});

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
`;

export const Text = styled(NativeText)`
  font-weight: 600;
  font-size: 28px;
  letter-spacing: -0.5px;
  margin-top: 15px;
  color: ${({ theme }) => theme.white};
`;
