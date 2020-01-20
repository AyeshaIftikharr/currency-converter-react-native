export const getLatestRate = currency => fetch(`http://fixer.handlebarlabs.com/latest?base=${currency}`);
