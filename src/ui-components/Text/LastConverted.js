import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { Text } from './styled';

const LastConverted = ({ date, base, quote, conversionRate }) => (
  <Text>{`1 ${base} = ${conversionRate} ${quote} as of ${format(date, 'MMM d, yyyy')}`}</Text>
);

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number,
};

export default LastConverted;
