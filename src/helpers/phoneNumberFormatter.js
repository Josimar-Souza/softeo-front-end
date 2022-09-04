const phoneNumberFormatter = (number) => {
  let formattedNumber = '';

  if (number.length < 11) {
    return;
  }

  for (let index = 0; index < number.length; index += 1) {
    switch (index) {
      case 0:
        formattedNumber += `+55 (${number[index]}`;
        break;
      case 1:
        formattedNumber += `${number[index]}) `;
        break;
      case 2:
        formattedNumber += `${number[index]} `;
        break;
      case 6:
        formattedNumber += `${number[index]}-`;
        break;
      default:
        formattedNumber += number[index];
    }
  }

  return formattedNumber;
};

export default phoneNumberFormatter;
