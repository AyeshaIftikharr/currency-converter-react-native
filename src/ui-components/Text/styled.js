import { Text as NativeText } from 'react-native';
import styled from 'styled-components';

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.white};
  text-align: center;
  font-size: 12px;
`;
