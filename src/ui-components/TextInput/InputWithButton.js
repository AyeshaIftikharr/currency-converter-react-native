import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput, Separator } from './styled';
import { UNDERLAY_COLOR } from '../../theme/Theme';

const InputWithButton = ({ buttonText, onPress, editable = true, textColor, onRemove, ...props }) => {
  return (
    <View editable={editable}>
      <TouchableHighlight onPress={onPress} underlayColor={UNDERLAY_COLOR}>
        <Text>{buttonText}</Text>
      </TouchableHighlight>
      <Separator />
      <TextInput underlineColorAndroid='transparent' {...props} />
      {onRemove && (
        <TouchableHighlight onPress={onRemove} underlayColor={UNDERLAY_COLOR}>
          <Text>-</Text>
        </TouchableHighlight>
      )}
    </View>
  );
};

InputWithButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  editable: PropTypes.bool,
  onRemove: PropTypes.func,
};

export default InputWithButton;
