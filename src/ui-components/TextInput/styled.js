import styled from 'styled-components';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export const StyledView = styled(View)`
  background-color: ${({ theme, editable }) => (!editable ? theme.lightGrey : theme.white)};
  width: 90%;
  height: ${INPUT_HEIGHT}px;
  border-radius: ${BORDER_RADIUS}px;
  flex-direction: row;
  margin-top: 11px;
  margin-bottom: 11px;
  align-items: center;
`;

export const StyledTouchableHighlight = styled(TouchableHighlight)`
  height: ${INPUT_HEIGHT}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.white};
  border-top-left-radius: ${BORDER_RADIUS}px;
  border-bottom-left-radius: ${BORDER_RADIUS}px;
`;

export const StyledText = styled(Text)`
  font-weight: 600;
  font-size: 20px;
  padding-left: 16px;
  padding-right: 16px;
  color: ${({ theme }) => theme.primaryColor};
`;

export const StyledSeparator = styled(View)`
  height: ${INPUT_HEIGHT}px;
  width: 1px;
  background-color: ${({ theme }) => theme.border};
`;

export const StyledTextInput = styled(TextInput)`
  color: ${({ theme }) => theme.inputText};
  flex: 1;
  font-size: 18px;
  height: ${INPUT_HEIGHT}px;
  padding-left: 8px;
  padding-right: 8px;
`;
