import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Form } from '../../ui-components/form';
import { MainLayout } from '../../ui-components/main-layout';
import { Logo } from '../../ui-components/logo';
import { Footer } from '../../ui-components/footer';

export const LoginScreen = ({ navigation: { navigate } }) => {
  return (
    <MainLayout>
      <StatusBar translucent={false} barStyle='light-content' />
      <Logo />
      <KeyboardAvoidingView behavior='padding'>
        <Form type='Login' navigate={navigate} />
      </KeyboardAvoidingView>
      <Footer text="Don't have an account yet?" onPress={() => navigate('Signup')} buttonText='Signup' />
    </MainLayout>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.object,
};
