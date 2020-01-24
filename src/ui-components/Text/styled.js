import { Text } from 'react-native';
import styled from 'styled-components';

export const StyledText = styled(Text)`
  color: ${({ theme, dark }) => (dark ? theme.darkText : theme.white)};
  font-size: 14px;
  text-align: center;
`;
