import styled from 'styled-components';
import { View } from 'react-native';

export const StyledView = styled(View)`
  align-items: center;
  background-color: ${({ theme }) => theme.primaryColor};
  flex: 1;
  justify-content: center;
`;
