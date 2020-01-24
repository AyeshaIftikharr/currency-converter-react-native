import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { MainLayout } from '../common/main-layout';
import { Logo } from '../common/logo';
import { Header } from './header';
import { TextInput } from '../../ui-components/text-input';
import { Button } from '../../ui-components/button';
import { LastConverted } from './last-converted';
import { StyledButtonContainer } from './styled';

import { WHITE, ICON_SIZE } from '../../theme';

export const Home = ({
  navigation: { navigate },
  isFetching,

  baseCurrency,
  getInitialConversion,
  quoteCurrencies,
  rates,
  lastConvertedDate,
  alertWithType,
  currencyError,
  onRemoveQuoteCurrency,
  onMarkCurrencyAsFavorite,
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

  const onViewFavoriteCurrencies = () => {
    navigate('FavoriteCurrencyList', { title: `Favorites` });
  };

  const handleOptionsPress = () => navigate('Options');

  return (
    <MainLayout>
      <StatusBar translucent={false} barStyle='light-content' />
      <Header onPress={handleOptionsPress} />
      <KeyboardAvoidingView behavior='padding'>
        <Logo />
        <TextInput
          buttonText={baseCurrency}
          onPress={handlePressBaseCurrency}
          value={amount.toString()}
          keyboardType='numeric'
          onChangeText={text => setAmount(text)}
        />
        {quoteCurrencies.map(quoteCurrency => (
          <React.Fragment key={quoteCurrency}>
            <TextInput
              buttonText={quoteCurrency}
              editable={false}
              value={isFetching ? '...' : (amount * rates[quoteCurrency]).toFixed(2)}
              onRemove={() => onRemoveQuoteCurrency(quoteCurrency)}
              onMarkAsFavorite={() =>
                onMarkCurrencyAsFavorite({
                  baseCurrency,
                  quoteCurrency,
                  lastConvertedDate,
                  conversionRate: rates[quoteCurrency],
                })
              }
            />
            <LastConverted
              date={lastConvertedDate}
              base={baseCurrency}
              quote={quoteCurrency}
              conversionRate={rates[quoteCurrency]}
            />
          </React.Fragment>
        ))}
        <StyledButtonContainer>
          <Button text='Add Currency' onPress={onAddQuoteCurrency} />
          <Button
            text='View Favorites'
            onPress={onViewFavoriteCurrencies}
            icon={<Icon name='heart' size={ICON_SIZE} color={WHITE} />}
          />
        </StyledButtonContainer>
      </KeyboardAvoidingView>
    </MainLayout>
  );
};

Home.propTypes = {
  isFetching: PropTypes.bool,
  baseCurrency: PropTypes.string.isRequired,
  currencyError: PropTypes.string,
  quoteCurrencies: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  lastConvertedDate: PropTypes.string.isRequired,
  rates: PropTypes.object.isRequired,
  alertWithType: PropTypes.func.isRequired,
  getInitialConversion: PropTypes.func.isRequired,
  onRemoveQuoteCurrency: PropTypes.func.isRequired,
  onMarkCurrencyAsFavorite: PropTypes.func.isRequired,
};
