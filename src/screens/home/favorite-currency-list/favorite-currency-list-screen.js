import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StatusBar } from 'react-native';

import { FavoriteListItem, Separator } from '../../../ui-components/list';
import { StyledView } from './styled';

export const FavoriteCurrencyList = ({ navigation, baseCurrency, changeBaseCurrency, onAddCurrency }) => {
  const onUnMarkFromFavorites = currency => {
    const { type } = navigation.state.params;
    if (type === 'base') {
      changeBaseCurrency(currency);
    } else if (type === 'quote') {
      onAddCurrency(currency);
    }
    navigation.goBack(null);
  };

  const data = [{ base: 'bla', conversionRate: '0.333', quote: 'bla bla', date: '01-01-2009' }];
  return (
    <StyledView>
      <StatusBar translucent={false} barStyle="light-content" />
      <FlatList
        data={data}
        renderItem={({ item }) => <FavoriteListItem item={item} onPress={() => onUnMarkFromFavorites(item)} />}
        keyExtractor={item => item}
        ItemSeparatorComponent={Separator}
      />
    </StyledView>
  );
};

FavoriteCurrencyList.propTypes = {
  baseCurrency: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  onAddCurrency: PropTypes.func.isRequired,
  changeBaseCurrency: PropTypes.func.isRequired,
};
