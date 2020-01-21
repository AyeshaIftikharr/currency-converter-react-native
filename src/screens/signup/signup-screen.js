import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Form } from '../../ui-components/form';
import { MainLayout } from '../../ui-components/main-layout';
import { Logo } from '../../ui-components/logo';
import { Footer } from '../../ui-components/footer';

export const SignupScreen = ({ navigation: { navigate } }) => {
  return (
    <MainLayout>
      <StatusBar translucent={false} barStyle='light-content' />
      <Logo />
      <KeyboardAvoidingView behavior='padding'>
        <Form type='Signup' navigate={navigate} />
      </KeyboardAvoidingView>
      <Footer text='Already have an account?' onPress={() => navigate('Login')} buttonText='Login' />
    </MainLayout>
  );
};

SignupScreen.propTypes = {
  navigation: PropTypes.object,
};
