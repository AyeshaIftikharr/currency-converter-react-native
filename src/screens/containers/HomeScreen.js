import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
// components
import { MainLayout } from '../ui-components/MainLayout';
import { Logo } from '../ui-components/Logo';
import { InputWithButton } from '../ui-components/TextInput';
import { AddButton } from '../ui-components/Buttons';
import { LastConverted } from '../ui-components/Text';
import { Header } from '../ui-components/Header';
import { connectAlert } from '../ui-components/Alert';

import { actions } from '../../actions/currency';

const HomeScreen = ({
  navigation: { navigate },
  isFetching,
  baseCurrency,
  getInitialConversion,
  quoteCurrencies,
  rates,
  lastConvertedDate,
  primaryColor,
  alertWithType,
  currencyError,
  onRemoveQuoteCurrency,
}) => {
  const [amount, setAmount] = useState(100);
  useEffect(() => {
    getInitialConversion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currencyError) {
      alertWithType('error', 'Error', currencyError);
    }
  }, [alertWithType, currencyError]);

  const handlePressBaseCurrency = () => {
    navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'base',
    });
  };

  const onAddQuoteCurrency = () => {
    navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' });
  };

  const handleOptionsPress = () => navigate('Options');

  return (
    <MainLayout backgroundColor={primaryColor}>
      <StatusBar translucent={false} barStyle="light-content" />
      <Header onPress={handleOptionsPress} />
      <KeyboardAvoidingView behavior="padding">
        <Logo tintColor={primaryColor} />
        <InputWithButton
          buttonText={baseCurrency}
          onPress={handlePressBaseCurrency}
          value={amount.toString()}
          keyboardType="numeric"
          onChangeText={text => setAmount(text)}
          textColor={primaryColor}
        />
        {quoteCurrencies.map(quoteCurrency => (
          <React.Fragment key={quoteCurrency}>
            <InputWithButton
              buttonText={quoteCurrency}
              editable={false}
              value={
                isFetching ? '...' : (amount * rates[quoteCurrency]).toFixed(2)
              }
              textColor={primaryColor}
              onRemove={() => onRemoveQuoteCurrency(quoteCurrency)}
            />
            <LastConverted
              date={lastConvertedDate}
              base={baseCurrency}
              quote={quoteCurrency}
              conversionRate={rates[quoteCurrency]}
            />
          </React.Fragment>
        ))}
        <AddButton text="Add" onPress={onAddQuoteCurrency} />
      </KeyboardAvoidingView>
    </MainLayout>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object,
  baseCurrency: PropTypes.string,
  lastConvertedDate: PropTypes.object,
  quoteCurrencies: PropTypes.array,
  isFetching: PropTypes.bool,
  primaryColor: PropTypes.string,
  currencyError: PropTypes.string,
  alertWithType: PropTypes.func,
  getInitialConversion: PropTypes.func,
  rates: PropTypes.object,
  onRemoveQuoteCurrency: PropTypes.func,
};

const mapStateToProps = ({ currency, theme }) => {
  const { baseCurrency, quoteCurrencies } = currency;
  const conversionSelector = currency.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrencies,
    rates,
    lastConvertedDate: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date(),
    isFetching: conversionSelector.isFetching,
    primaryColor: theme.primaryColor,
    currencyError: currency.error,
  };
};

const mapDispatchToProps = dispatch => ({
  getInitialConversion: () => dispatch(actions.getInitialConversion()),
  onRemoveQuoteCurrency: currency =>
    dispatch(actions.onRemoveCurrency(currency)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(connectAlert(HomeScreen));
