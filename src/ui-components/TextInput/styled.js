import styled from 'styled-components';
import {
  View as NativeView,
  Text as NativeText,
  TextInput as NativeTextInput,
  TouchableHighlight as NativeTouchableHighlight,
} from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export const View = styled(NativeView)`
  background-color: ${({ theme, editable }) => (editable ? theme.lightGrey : theme.white)};
  width: 90%;
  height: ${INPUT_HEIGHT}px;
  border-radius: ${BORDER_RADIUS}px;
  flex-direction: row;
  margin-top: 11px;
  margin-bottom: 11px;
  align-items: center;
`;

export const TouchableHighlight = styled(NativeTouchableHighlight)`
  height: ${INPUT_HEIGHT}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.white};
  border-top-left-radius: ${BORDER_RADIUS}px;
  border-bottom-left-radius: ${BORDER_RADIUS}px;
`;

export const Text = styled(NativeText)`
  font-weight: 600;
  font-size: 20px;
  padding-left: 16px;
  padding-right: 16px;
  color: ${({ theme }) => theme.primaryColor};
`;

export const Separator = styled(NativeView)`
  height: ${INPUT_HEIGHT}px;
  width: 1px;
  background-color: ${({ theme }) => theme.border};
`;

export const TextInput = styled(NativeTextInput)`
  height: ${INPUT_HEIGHT}px;
  flex: 1;
  font-size: 18px;
  padding-left: 8px;
  padding-right: 8px;
  color: ${({ theme }) => theme.inputText};
`;
