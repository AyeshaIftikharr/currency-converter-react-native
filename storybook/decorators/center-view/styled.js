import { View } from 'react-native';
import styled from 'styled-components';

export const StyledView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, dark }) => (dark ? theme.primaryColor : theme.white)};
`;
