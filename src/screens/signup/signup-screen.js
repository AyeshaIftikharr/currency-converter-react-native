import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Form } from '../login/form';
import { MainLayout } from '../common/main-layout';
import { Logo } from '../common/logo';
import { RedirectPrompt } from '../login/redirect-prompt';

export const Signup = ({ handleSignup, navigation: { navigate } }) => {
  const gotoHomeDirectory = () => {
    setTimeout(() => {
      navigate('Home');
      handleSignup();
    }, 500);
  };

  return (
    <MainLayout>
      <StatusBar translucent={false} barStyle='light-content' />
      <Logo />
      <KeyboardAvoidingView behavior='padding'>
        <Form type='Signup' onSubmit={gotoHomeDirectory} />
        <RedirectPrompt text='Already have an account?' onPress={() => navigate('Login')} buttonText='Login' />
      </KeyboardAvoidingView>
    </MainLayout>
  );
};

Signup.propTypes = {
  navigation: PropTypes.object.isRequired,
  handleSignup: PropTypes.func.isRequired,
};
