import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, StatusBar, View } from 'react-native';

import { ListItem, Separator } from '../components/List';
import CURRENCIES from '../data/currencies';

import * as actions from '../actions/currencies';

const CurrencyList = ({
  navigation,
  baseCurrency,
  quoteCurrency,
  primaryColor,
  changeBaseCurrency,
  onAddCurrency,
}) => {
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
    <View style={{ flex: 1 }}>
      <StatusBar translucent={false} barStyle="light-content" />
      <FlatList
        data={CURRENCIES}
        renderItem={({ item }) => (
          <ListItem
            text={item}
            selected={
              item === baseCurrency && navigation.state.params.type !== 'quote'
            }
            onPress={() => handlePress(item)}
            iconBackground={primaryColor}
          />
        )}
        keyExtractor={item => item}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

CurrencyList.propTypes = {
  navigation: PropTypes.object,
  baseCurrency: PropTypes.string,
  quoteCurrency: PropTypes.string,
  primaryColor: PropTypes.string,
  onAddCurrency: PropTypes.func,
  changeBaseCurrency: PropTypes.func,
};

const mapStateToProps = ({ currencies, theme }) => ({
  baseCurrency: currencies.baseCurrency,
  quoteCurrency: currencies.quoteCurrency,
  primaryColor: theme.primaryColor,
});

const mapDispatchToProps = dispatch => ({
  changeBaseCurrency: currency =>
    dispatch(actions.changeBaseCurrency(currency)),
  onAddCurrency: currency => dispatch(actions.onAddCurrency(currency)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencyList);
