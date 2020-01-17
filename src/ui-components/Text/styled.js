import { Text as NativeText } from 'react-native';
import styled from 'styled-components';

export const Text = styled(NativeText)`
  color: ${({ theme }) => theme.white};
  text-align: center;
  font-size: 12px;
`;
