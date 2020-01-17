import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput, Separator } from './styled';
// styles
// import color from 'color';

const InputWithButton = ({
  buttonText,
  onPress,
  editable = true,
  textColor,
  onRemove,
  ...props
}) => {
  // const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
  //   styles.$buttonBackgroundColorModifier,
  // );
  return (
    <View editable={editable}>
      <TouchableHighlight onPress={onPress}>
        <Text>{buttonText}</Text>
      </TouchableHighlight>
      <Separator />
      <TextInput underlineColorAndroid="transparent" {...props} />
      {onRemove && (
        <TouchableHighlight onPress={onRemove}>
          <Text>-</Text>
        </TouchableHighlight>
      )}
    </View>
  );
};

InputWithButton.propTypes = {
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
  editable: PropTypes.bool,
  onRemove: PropTypes.func,
};

export default InputWithButton;
