import styled from 'styled-components';
import { View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { INPUT_HEIGHT, BORDER_RADIUS } from '../../../theme';

export const StyledView = styled(View)`
  flex: 1;
`;

export const StyledTouchableHighlight = styled(TouchableHighlight)`
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  border-bottom-left-radius: ${BORDER_RADIUS}px;
  border-top-left-radius: ${BORDER_RADIUS}px;
  height: ${INPUT_HEIGHT}px;
  justify-content: center;
`;

export const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.primaryColor};
`;
