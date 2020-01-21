import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Form } from '../../ui-components/form';
import { MainLayout } from '../../ui-components/main-layout';
import { Logo } from '../../ui-components/logo';
import { Footer } from '../../ui-components/footer';

export const Signup = ({ onHandleLogin, navigation: { navigate } }) => {
  const gotoHomeDirectory = () => {
    setTimeout(() => {
      navigate('Home');
    }, 500);
    onHandleLogin();
  };

  return (
    <MainLayout>
      <StatusBar translucent={false} barStyle='light-content' />
      <Logo />
      <KeyboardAvoidingView behavior='padding'>
        <Form type='Signup' onSubmit={gotoHomeDirectory} />
      </KeyboardAvoidingView>
      <Footer text='Already have an account?' onPress={() => navigate('Login')} buttonText='Login' />
    </MainLayout>
  );
};

Signup.propTypes = {
  navigation: PropTypes.object.isRequired,
  onHandleLogin: PropTypes.func.isRequired,
};
