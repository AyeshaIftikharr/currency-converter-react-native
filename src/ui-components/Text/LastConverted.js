import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { Text } from './styled';

export const LastConverted = ({ date, base, quote, conversionRate }) => (
  <Text>{`1 ${base} = ${conversionRate} ${quote} as of ${format(date, 'MMM d, yyyy')}`}</Text>
);

LastConverted.propTypes = {
  date: PropTypes.object.isRequired,
  base: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  conversionRate: PropTypes.number.isRequired,
};
