import styled from 'styled-components';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export const StyledView = styled(View)`
  align-items: center;
  background-color: ${({ theme, editable }) => (!editable ? theme.lightGrey : theme.white)};
  border-radius: ${BORDER_RADIUS}px;
  flex-direction: row;
  height: ${INPUT_HEIGHT}px;
  margin-bottom: 11px;
  margin-top: 11px;
  width: 90%;
`;

export const StyledTouchableHighlight = styled(TouchableHighlight)`
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  border-bottom-left-radius: ${BORDER_RADIUS}px;
  border-top-left-radius: ${BORDER_RADIUS}px;
  height: ${INPUT_HEIGHT}px;
  justify-content: center;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 20px;
  font-weight: 600;
  padding-left: 16px;
  padding-right: 16px;
`;

export const StyledSeparator = styled(View)`
  background-color: ${({ theme }) => theme.border};
  height: ${INPUT_HEIGHT}px;
  width: 1px;
`;

export const StyledTextInput = styled(TextInput)`
  color: ${({ theme }) => theme.inputText};
  flex: 1;
  font-size: 18px;
  height: ${INPUT_HEIGHT}px;
  padding-left: 8px;
  padding-right: 8px;
`;
