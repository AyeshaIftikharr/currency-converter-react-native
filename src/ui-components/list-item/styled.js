import { StyleSheet } from 'react-native';
import styled from 'styled-components';
import { View, Text, Image } from 'react-native';

export const StyledView = styled(View)`
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 20px 16px 20px;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.darkText};
  font-size: 16px;
`;

export const StyledSeparatorLine = styled(View)`
  background-color: ${({ theme }) => theme.border};
  flex: 1;
  height: ${StyleSheet.hairlineWidth}px;
  margin-left: 20px;
`;

export const StyledIconView = styled(View)`
  align-items: center;
  background-color: ${({ theme, visible, iconBackground }) =>
    visible ? (iconBackground ? iconBackground : theme.primaryColor) : 'transparent'};
  border-radius: 15px;
  height: 30px;
  justify-content: center;
  width: 30px;
`;

export const StyledCheckIcon = styled(Image)`
  width: 18px;
`;
