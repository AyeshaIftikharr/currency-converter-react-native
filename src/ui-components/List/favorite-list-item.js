import PropTypes from 'prop-types';
import React from 'react';
import format from 'date-fns/format';

import Icon from 'react-native-vector-icons/FontAwesome';
import { StyledView, StyledText } from './styled';
import { StyledIcon, StyledTouchableHighlight } from '../common';
import { ICON_SIZE, BLUE, UNDERLAY_COLOR } from '../../theme';

export const FavoriteListItem = ({ item, onPress }) => {
  const { baseCurrency, conversionRate, quoteCurrency, lastConvertedDate } = item;
  return (
    <StyledView>
      <StyledText>{`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
        lastConvertedDate,
        'MMM d, yyyy',
      )}`}</StyledText>
      <StyledTouchableHighlight onPress={onPress} underlayColor={UNDERLAY_COLOR}>
        <StyledIcon>
          <Icon name='heart-o' size={ICON_SIZE + 5} color={BLUE} />
        </StyledIcon>
      </StyledTouchableHighlight>
    </StyledView>
  );
};

FavoriteListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func,
};
