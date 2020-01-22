import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';

export const ScreenLoader = ({ navigation: { navigate }, isLoggedIn }) => {
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

ScreenLoader.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
};
