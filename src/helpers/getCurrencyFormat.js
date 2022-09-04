const getCurrencyFormat = (value, local, currencyStyle, currency) => {
  const formatter = new Intl.NumberFormat(local, {
    style: currencyStyle,
    currency,
  });

  return formatter.format(value);
};

export default getCurrencyFormat;
