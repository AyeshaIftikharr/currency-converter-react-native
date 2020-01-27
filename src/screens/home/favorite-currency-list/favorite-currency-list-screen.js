import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StatusBar } from 'react-native';

import { Separator, ListItem } from '../../../ui-components/list-item';
import { StyledView, StyledTouchableHighlight, StyledIcon } from './styled';
import { ICON_SIZE, BLUE, UNDERLAY_COLOR } from '../../../theme';

export const FavoriteCurrencyList = ({ favoriteCurrencyList, onUnMarkCurrencyFromFavorites }) => (
  <StyledView>
    <StatusBar translucent={false} barStyle='light-content' />
    <FlatList
      data={favoriteCurrencyList}
      renderItem={({ item }) => (
        <ListItem
          text={`1 ${item.baseCurrency} = ${item.conversionRate} ${item.quoteCurrency} as of ${item.lastConvertedDate}`}
          customIcon={
            <StyledTouchableHighlight
              onPress={() => onUnMarkCurrencyFromFavorites(item)}
              underlayColor={UNDERLAY_COLOR}>
              <StyledIcon name='heart-o' size={ICON_SIZE + 5} color={BLUE} />
            </StyledTouchableHighlight>
          }
        />
      )}
      keyExtractor={item => item.conversionRate.toString()}
      ItemSeparatorComponent={Separator}
    />
  </StyledView>
);

FavoriteCurrencyList.propTypes = {
  favoriteCurrencyList: PropTypes.array.isRequired,
  onUnMarkCurrencyFromFavorites: PropTypes.func.isRequired,
};
