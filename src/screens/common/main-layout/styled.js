import styled from 'styled-components';
import { SafeAreaView } from 'react-native';

export const StyledSafeAreaView = styled(SafeAreaView)`
  align-items: center;
  background-color: ${({ theme }) => theme.primaryColor};
  flex: 1;
  justify-content: center;
`;
