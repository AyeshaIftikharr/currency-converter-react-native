import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './styled';

export const LastConverted = ({ date, base, quote, conversionRate }) => (
  <StyledText>{`1 ${base} = ${conversionRate} ${quote} as of ${date}`}</StyledText>
);

LastConverted.propTypes = {
  date: PropTypes.string,
  base: PropTypes.string.isRequired,
  quote: PropTypes.string,
  conversionRate: PropTypes.number,
};
