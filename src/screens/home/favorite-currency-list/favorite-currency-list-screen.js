import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StatusBar } from 'react-native';

import { FavoriteListItem, Separator } from '../../../ui-components/list';
import { StyledView } from './styled';

export const FavoriteCurrencyList = ({ favoriteCurrencyList, onUnMarkCurrencyFromFavorites }) => (
  <StyledView>
    <StatusBar translucent={false} barStyle="light-content" />
    <FlatList
      data={favoriteCurrencyList}
      renderItem={({ item }) => <FavoriteListItem item={item} onPress={() => onUnMarkCurrencyFromFavorites(item)} />}
      keyExtractor={item => item.conversionRate.toString()}
      ItemSeparatorComponent={Separator}
    />
  </StyledView>
);

FavoriteCurrencyList.propTypes = {
  favoriteCurrencyList: PropTypes.array.isRequired,
  onUnMarkCurrencyFromFavorites: PropTypes.func.isRequired,
};
