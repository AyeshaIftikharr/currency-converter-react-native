import styled from 'styled-components';
import { View, TouchableHighlight, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { INPUT_HEIGHT, BORDER_RADIUS } from '../../../../theme';

export const StyledView = styled(View)`
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 20px 16px 20px;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.darkText};
  font-size: 16px;
`;

export const StyledTouchableHighlight = styled(TouchableHighlight)`
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  border-bottom-left-radius: ${BORDER_RADIUS}px;
  border-top-left-radius: ${BORDER_RADIUS}px;
  height: ${INPUT_HEIGHT}px;
  justify-content: center;
`;

export const StyledIconView = styled(View)`
  padding: 10px;
`;

export const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.primaryColor};
`;
