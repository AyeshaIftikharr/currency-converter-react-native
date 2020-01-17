import EStyleSheet from 'react-native-extended-stylesheet';
import styled from 'styled-components';
import {
  View as NativeView,
  Image as NativeImage,
  TouchableOpacity as NativeTouchableOpacity,
  Platform,
} from 'react-native';

export default EStyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    '@media ios': {
      paddingTop: 20,
    },
    // '@media android': {
    //   paddingTop: StatusBar.currentHeight,
    // },
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  icon: {
    width: 18,
  },
});

export const View = styled(NativeView)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  padding-top: ${Platform.OS === 'ios' ? '20px' : '0px'};
`;

export const Image = styled(NativeImage)`
  width: 18px;
`;

export const TouchableOpacity = styled(NativeTouchableOpacity)`
  align-self: flex-end;
  padding: 5px 20px 5px 20px;
`;
