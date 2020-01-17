import EStyleSheet from 'react-native-extended-stylesheet';
import styled from 'styled-components';
import {
  View as NativeView,
  TouchableOpacity as NativeTouchableOpacity,
  Text as NativeText,
  Image as NativeImage,
} from 'react-native';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 19,
    marginRight: 11,
  },
  text: {
    color: '$white',
    fontSize: 14,
    paddingVertical: 20,
    fontWeight: '300',
  },
});

export const TouchableOpacity = styled(NativeTouchableOpacity)`
  align-items: center;
`;

export const View = styled(NativeView)`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled(NativeImage)`
  width: 19px;
  margin-right: 11px;
`;

export const Text = styled(NativeText)`
  color: ${({ theme }) => theme.white};
  font-size: 14px;
  padding: 20px 0px 20px 0px;
  font-weight: 300;
`;
