import { Text } from 'react-native';
import styled from 'styled-components';

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.white};
  font-size: 12px;
  text-align: center;
`;
