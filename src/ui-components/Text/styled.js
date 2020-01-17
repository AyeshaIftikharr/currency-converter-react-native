import EStyleSheet from 'react-native-extended-stylesheet';
import { Text as NativeText } from 'react-native';
import styled from 'styled-components';

export default EStyleSheet.create({
  smallText: {
    color: '$white',
    textAlign: 'center',
    fontSize: 12,
  },
});

export const Text = styled(NativeText)`
  color: ${({ theme }) => theme.white};
  text-align: center;
  font-size: 12px;
`;
