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
  font-size: 14px;
  font-weight: 300;
  padding: 20px 0 20px 0px;
`;
