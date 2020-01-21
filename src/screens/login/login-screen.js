import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Form } from '../../ui-components/form';
import { MainLayout } from '../../ui-components/main-layout';
import { Logo } from '../../ui-components/logo';
import { Footer } from '../../ui-components/footer';

export const Login = ({ handleLogin, navigation: { navigate } }) => {
  const gotoHomeDirectory = () => {
    setTimeout(() => {
      navigate('Home');
      handleLogin();
    }, 500);
  };

  return (
    <MainLayout>
      <StatusBar translucent={false} barStyle='light-content' />
      <Logo />
      <KeyboardAvoidingView behavior='padding'>
        <Form type='Login' onSubmit={gotoHomeDirectory} />
      </KeyboardAvoidingView>
      <Footer text="Don't have an account yet?" onPress={() => navigate('Signup')} buttonText='Signup' />
    </MainLayout>
  );
};

Login.propTypes = {
  navigation: PropTypes.object,
  handleLogin: PropTypes.func.isRequired,
};
