import EStyleSheet from 'react-native-extended-stylesheet';
import styled from 'styled-components';
import {
  View as NativeView,
  Text as NativeText,
  TextInput as NativeTextInput,
  TouchableHighlight as NativeTouchableHighlight,
} from 'react-native';
// import StyleSheet from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.1, // how dark we want tomake that background
  container: {
    backgroundColor: '$white',
    width: '90%',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    marginVertical: 11,
    alignItems: 'center',
  },
  containerDisabled: {
    backgroundColor: '$lightGrey',
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '$primaryBlue',
  },
  border: {
    height: INPUT_HEIGHT,
    width: 1, //StyleSheet.hairlineWidth,
    backgroundColor: '$border',
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: '$inputText',
  },
});

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
