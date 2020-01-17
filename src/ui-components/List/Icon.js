import PropTypes from 'prop-types';
import React from 'react';
import { IconView, CheckIcon } from './styled';

const Icon = ({ visible, checkmark }) => {
  if (visible) {
    return (
      <IconView visible={visible}>
        {checkmark && <CheckIcon source={require('./images/check.png')} resizeMode="contain" />}
      </IconView>
    );
  }

  return <IconView />;
};

Icon.propTypes = {
  visible: PropTypes.bool,
  checkmark: PropTypes.bool,
};

export default Icon;
