import PropTypes from 'prop-types';
import React from 'react';

import { StyledView, StyledText } from '../../../ui-components/list-item/styled';
import { StyledIcon, StyledIconView, StyledTouchableHighlight } from '../../../ui-components/common';
import { ICON_SIZE, BLUE, UNDERLAY_COLOR } from '../../../theme';

export const FavoriteListItem = ({ item, onPress }) => {
  const { baseCurrency, conversionRate, quoteCurrency, lastConvertedDate } = item;
  return (
    <StyledView>
      <StyledText>{`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${lastConvertedDate}`}</StyledText>
      <StyledTouchableHighlight onPress={onPress} underlayColor={UNDERLAY_COLOR}>
        <StyledIconView>
          <StyledIcon name="heart-o" size={ICON_SIZE + 5} color={BLUE} />
        </StyledIconView>
      </StyledTouchableHighlight>
    </StyledView>
  );
};

FavoriteListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func,
};
