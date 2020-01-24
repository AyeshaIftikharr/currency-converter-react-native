import React from 'react';
import PropTypes from 'prop-types';

import { StyledView, StyledText, StyledTextInput, StyledSeparator } from './styled';
import { StyledIcon, StyledIconView, StyledTouchableHighlight } from '../common';
import { UNDERLAY_COLOR, ICON_SIZE, INPUT_TEXT } from '../../theme';

export const TextInput = ({
  buttonText,
  onPress,
  editable = true,
  textColor,
  onRemove,
  onMarkAsFavorite,
  withButton,
  ...props
}) => {
  return (
    <StyledView editable={editable}>
      {withButton && (
        <>
          <StyledTouchableHighlight onPress={onPress} underlayColor={UNDERLAY_COLOR}>
            <StyledText>{buttonText}</StyledText>
          </StyledTouchableHighlight>
          <StyledSeparator />
        </>
      )}
      <StyledTextInput
        pointerEvents={!editable ? 'none' : 'auto'}
        placeholderTextColor={INPUT_TEXT}
        underlineColorAndroid="transparent"
        {...props}
      />
      {onMarkAsFavorite && (
        <StyledTouchableHighlight onPress={onMarkAsFavorite} underlayColor={UNDERLAY_COLOR}>
          <StyledIconView>
            <StyledIcon name="heart" size={ICON_SIZE} />
          </StyledIconView>
        </StyledTouchableHighlight>
      )}
      {onRemove && (
        <StyledTouchableHighlight onPress={onRemove} underlayColor={UNDERLAY_COLOR}>
          <StyledIconView>
            <StyledIcon name="trash" size={ICON_SIZE} />
          </StyledIconView>
        </StyledTouchableHighlight>
      )}
    </StyledView>
  );
};

TextInput.propTypes = {
  editable: PropTypes.bool,
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
  onRemove: PropTypes.func,
  onMarkAsFavorite: PropTypes.func,
};
