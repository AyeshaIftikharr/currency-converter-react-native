import styled from 'styled-components';
import { View, TouchableOpacity, Text, Image } from 'react-native';

export const StyledTouchableOpacity = styled(TouchableOpacity)`
  align-items: center;
`;

export const StyledView = styled(View)`
  align-items: center;
  flex-direction: row;
`;

export const StyledImage = styled(Image)`
  margin-right: 11px;
  width: 19px;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.white};
  font-size: 15px;
  font-weight: 400;
  padding: 20px 5px 20px 0;
`;

export const StyledContainedTouchableOpacity = styled(TouchableOpacity)`
  align-items: center;
  background-color: ${({ theme, disabled }) => (disabled ? theme.disabledBackground : theme.darkBackground)};
  border-radius: 5px;
  width: 335px;
  margin-top: 10px;
`;

export const StyledBoldText = styled(Text)`
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-weight: 400;
  padding: 20px;
`;
