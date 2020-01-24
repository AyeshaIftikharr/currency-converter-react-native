import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './text';

export const LastConverted = ({ date, base, quote, conversionRate }) => (
  <Text>{`1 ${base} = ${conversionRate} ${quote} as of ${date}`}</Text>
);

LastConverted.propTypes = {
  date: PropTypes.string,
  base: PropTypes.string.isRequired,
  quote: PropTypes.string,
  conversionRate: PropTypes.number,
};
