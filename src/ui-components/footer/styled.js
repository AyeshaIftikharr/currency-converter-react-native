import styled from 'styled-components';
import { View, Text } from 'react-native';

export const StyledView = styled(View)`
  align-items: flex-end;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 16px;
  padding-top: 20px;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.white};
  font-size: 16px;
`;

export const StyledBoldText = styled(Text)`
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-weight: bold;
  padding-left: 5px;
`;
