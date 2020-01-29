import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SplashScreen from 'react-native-splash-screen';
import { View, ActivityIndicator } from 'react-native';

export const AuthLoadingScreen = ({ navigation: { navigate }, isLoggedIn }) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('App');
    } else {
      navigate('Auth');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

AuthLoadingScreen.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
};
