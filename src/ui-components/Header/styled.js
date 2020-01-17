import styled from 'styled-components';
import {
  View as NativeView,
  Image as NativeImage,
  TouchableOpacity as NativeTouchableOpacity,
  Platform,
} from 'react-native';

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
