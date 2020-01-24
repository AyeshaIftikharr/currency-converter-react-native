import PropTypes from 'prop-types';
import React from 'react';

import { LastConverted } from '../../last-converted';
import { StyledView, StyledIcon, StyledIconView, StyledTouchableHighlight } from './styled';
import { ICON_SIZE, BLUE, UNDERLAY_COLOR } from '../../../../theme';

export const FavoriteListItem = ({ item, onPress }) => {
  return (
    <StyledView>
      <LastConverted {...item} />
      <StyledTouchableHighlight onPress={onPress} underlayColor={UNDERLAY_COLOR}>
        <StyledIconView>
          <StyledIcon name='heart-o' size={ICON_SIZE + 5} color={BLUE} />
        </StyledIconView>
      </StyledTouchableHighlight>
    </StyledView>
  );
};

FavoriteListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func,
};
