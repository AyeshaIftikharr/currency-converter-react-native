import React from 'react';
import PropTypes from 'prop-types';
import { StyledView, StyledText, StyledTouchableHighlight, StyledTextInput, StyledSeparator } from './styled';
import { UNDERLAY_COLOR } from '../../theme/Theme';

export const InputWithButton = ({ buttonText, onPress, editable = true, textColor, onRemove, ...props }) => {
  return (
    <StyledView editable={editable}>
      <StyledTouchableHighlight onPress={onPress} underlayColor={UNDERLAY_COLOR}>
        <StyledText>{buttonText}</StyledText>
      </StyledTouchableHighlight>
      <StyledSeparator />
      <StyledTextInput underlineColorAndroid='transparent' {...props} />
      {onRemove && (
        <StyledTouchableHighlight onPress={onRemove} underlayColor={UNDERLAY_COLOR}>
          <StyledText>-</StyledText>
        </StyledTouchableHighlight>
      )}
    </StyledView>
  );
};

InputWithButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  editable: PropTypes.bool,
  onRemove: PropTypes.func,
};
