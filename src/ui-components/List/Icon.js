import PropTypes from 'prop-types';
import React from 'react';
import { StyledIconView, StyledCheckIcon } from './styled';

export const Icon = ({ visible, checkmark, iconBackground }) => {
  if (visible) {
    return (
      <StyledIconView visible={visible} iconBackground={iconBackground}>
        {checkmark && <StyledCheckIcon source={require('./images/check.png')} resizeMode='contain' />}
      </StyledIconView>
    );
  }

  return <StyledIconView />;
};

Icon.propTypes = {
  visible: PropTypes.bool,
  checkmark: PropTypes.bool,
  iconBackground: PropTypes.string,
};
