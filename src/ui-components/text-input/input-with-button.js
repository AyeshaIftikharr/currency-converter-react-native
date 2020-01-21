import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import { StyledView, StyledText, StyledTextInput, StyledSeparator } from './styled';
import { StyledIcon, StyledTouchableHighlight } from '../common';
import { UNDERLAY_COLOR, ICON_SIZE, BLUE } from '../../theme';

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
      <StyledTextInput underlineColorAndroid="transparent" {...props} />
      {onMarkAsFavorite && (
        <StyledTouchableHighlight onPress={onMarkAsFavorite} underlayColor={UNDERLAY_COLOR}>
          <StyledIcon>
            <Icon name="heart" size={ICON_SIZE} color={BLUE} />
          </StyledIcon>
        </StyledTouchableHighlight>
      )}
      {onRemove && (
        <StyledTouchableHighlight onPress={onRemove} underlayColor={UNDERLAY_COLOR}>
          <StyledIcon>
            <Icon name="trash" size={ICON_SIZE} color={BLUE} />
          </StyledIcon>
        </StyledTouchableHighlight>
      )}
    </StyledView>
  );
};

InputWithButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  editable: PropTypes.bool,
  onRemove: PropTypes.func,
  onMarkAsFavorite: PropTypes.func,
};
