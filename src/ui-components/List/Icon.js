import PropTypes from 'prop-types';
import React from 'react';
import { IconView, CheckIcon } from './styled';

const Icon = ({ visible, checkmark, iconBackground }) => {
  if (visible) {
    return (
      <IconView visible={visible} iconBackground={iconBackground}>
        {checkmark && <CheckIcon source={require('./images/check.png')} resizeMode='contain' />}
      </IconView>
    );
  }

  return <IconView />;
};

Icon.propTypes = {
  visible: PropTypes.bool,
  checkmark: PropTypes.bool,
  iconBackground: PropTypes.string,
};

export default Icon;
