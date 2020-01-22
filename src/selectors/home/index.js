import format from 'date-fns/format';

export const getFormattedDate = date => format(date, 'MMM d, yyyy');
