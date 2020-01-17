import EStyleSheet from 'react-native-extended-stylesheet';
import styled from 'styled-components';
import { View as NativeView } from 'react-native';

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primaryBlue',
  },
});

export const View = styled(NativeView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryColor};
`;
