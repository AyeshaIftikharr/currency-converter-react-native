import React from 'react';
import PropTypes from 'prop-types';

import { StyledView, StyledText, StyledTextInput, StyledSeparator } from './styled';
import { StyledIcon, StyledIconView, StyledTouchableHighlight } from '../common';
import { UNDERLAY_COLOR, ICON_SIZE } from '../../theme';

export const InputWithButton = ({
  buttonText,
  onPress,
  editable = true,
  textColor,
  onRemove,
  onMarkAsFavorite,
  ...props
}) => {
  return (
    <StyledView editable={editable}>
      <StyledTouchableHighlight onPress={onPress} underlayColor={UNDERLAY_COLOR}>
        <StyledText>{buttonText}</StyledText>
      </StyledTouchableHighlight>
      <StyledSeparator />
      <StyledTextInput underlineColorAndroid='transparent' {...props} />
      {onMarkAsFavorite && (
        <StyledTouchableHighlight onPress={onMarkAsFavorite} underlayColor={UNDERLAY_COLOR}>
          <StyledIconView>
            <StyledIcon name='heart' size={ICON_SIZE} />
          </StyledIconView>
        </StyledTouchableHighlight>
      )}
      {onRemove && (
        <StyledTouchableHighlight onPress={onRemove} underlayColor={UNDERLAY_COLOR}>
          <StyledIconView>
            <StyledIcon name='trash' size={ICON_SIZE} />
          </StyledIconView>
        </StyledTouchableHighlight>
      )}
    </StyledView>
  );
};

InputWithButton.propTypes = {
  editable: PropTypes.bool,
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  onRemove: PropTypes.func,
  onMarkAsFavorite: PropTypes.func,
};
