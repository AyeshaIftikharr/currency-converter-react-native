import { StyleSheet } from 'react-native';
import styled from 'styled-components';
import { View, Text, Image } from 'react-native';

export const StyledView = styled(View)`
  padding: 16px 20px 16px 20px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.white};
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.darkText};
  font-size: 16px;
`;

export const StyledSeparatorLine = styled(View)`
  background-color: ${({ theme }) => theme.border};
  height: ${StyleSheet.hairlineWidth}px;
  flex: 1;
  margin-left: 20px;
`;

export const StyledIconView = styled(View)`
  border-radius: 15px;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, visible, iconBackground }) =>
    visible ? (iconBackground ? iconBackground : theme.primaryColor) : 'transparent'};
`;

export const StyledCheckIcon = styled(Image)`
  width: 18px;
`;
