import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Form } from './form';
import { MainLayout } from '../common/main-layout';
import { Logo } from '../common/logo';
import { RedirectPrompt } from './redirect-prompt';

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
        <RedirectPrompt text={`Don't have an account yet?`} onPress={() => navigate('Signup')} buttonText='Signup' />
      </KeyboardAvoidingView>
    </MainLayout>
  );
};

Login.propTypes = {
  navigation: PropTypes.object,
  handleLogin: PropTypes.func.isRequired,
};
