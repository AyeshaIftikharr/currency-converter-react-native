import { StyleSheet } from 'react-native';
import styled from 'styled-components';
import { View as NativeView, Text as NativeText, Image as NativeImage } from 'react-native';

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
