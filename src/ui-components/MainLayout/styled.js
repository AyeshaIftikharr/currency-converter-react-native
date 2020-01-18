import styled from 'styled-components';
import { View } from 'react-native';

export const StyledView = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryColor};
`;
