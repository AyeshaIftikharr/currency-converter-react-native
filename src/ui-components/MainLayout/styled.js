import styled from 'styled-components';
import { View as NativeView } from 'react-native';

export const View = styled(NativeView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryColor};
`;
