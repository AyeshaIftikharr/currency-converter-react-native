import styled from 'styled-components';
import { View, TouchableOpacity, Text, Image } from 'react-native';

export const StyledTouchableOpacity = styled(TouchableOpacity)`
  align-items: center;
`;

export const StyledView = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const StyledImage = styled(Image)`
  width: 19px;
  margin-right: 11px;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.white};
  font-size: 14px;
  padding: 20px 0px 20px 0px;
  font-weight: 300;
`;
