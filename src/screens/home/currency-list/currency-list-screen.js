import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StatusBar } from 'react-native';
// components
import { ListItem, Separator } from '../../../ui-components/list';
import { CURRENCIES } from '../../../static/data/currency-list';
// styles
import { StyledView } from './styled';

export const CurrencyList = ({ navigation, baseCurrency, changeBaseCurrency, onAddCurrency }) => {
  const handlePress = currency => {
    const { type } = navigation.state.params;
    if (type === 'base') {
      changeBaseCurrency(currency);
    } else if (type === 'quote') {
      onAddCurrency(currency);
    }
    navigation.goBack(null);
  };

  return (
    <StyledView>
      <StatusBar translucent={false} barStyle='light-content' />
      <FlatList
        data={CURRENCIES}
        renderItem={({ item }) => (
          <ListItem
            text={item}
            selected={item === baseCurrency && navigation.state.params.type !== 'quote'}
            onPress={() => handlePress(item)}
          />
        )}
        keyExtractor={item => item}
        ItemSeparatorComponent={Separator}
      />
    </StyledView>
  );
};

CurrencyList.propTypes = {
  baseCurrency: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  onAddCurrency: PropTypes.func.isRequired,
  changeBaseCurrency: PropTypes.func.isRequired,
};
