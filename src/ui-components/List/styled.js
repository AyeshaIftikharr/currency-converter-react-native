import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styled from 'styled-components';
import {
  View as NativeView,
  Text as NativeText,
  Image as NativeImage,
  TouchableHighlight as NativeTouchableHighlight,
} from 'react-native';

export default EStyleSheet.create({
  $underlayColor: '$border',
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '$white',
  },
  text: {
    color: '$darkText',
    fontSize: 16,
  },
  separator: {
    backgroundColor: '$border',
    height: StyleSheet.hairlineWidth,
    flex: 1,
    marginLeft: 20,
  },
  icon: {
    backgroundColor: 'transparent',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconVisible: {
    backgroundColor: '$primaryBlue',
  },
  checkIcon: {
    width: 18,
  },
});

export const View = styled(NativeView)`
  padding: 16px 20px 16px 20px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.white};
`;

export const Text = styled(NativeText)`
  color: ${({ theme }) => theme.darkText};
  font-size: 16px;
`;

export const SeparatorLine = styled(NativeView)`
  background-color: ${({ theme }) => theme.border};
  height: ${StyleSheet.hairlineWidth}px;
  flex: 1;
  margin-left: 20px;
`;

export const IconView = styled(NativeView)`
  border-radius: 15px;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, visible, iconBackground }) =>
    visible ? (iconBackground ? iconBackground : theme.primaryColor) : 'transparent'};
`;

export const CheckIcon = styled(NativeImage)`
  width: 18px;
`;
