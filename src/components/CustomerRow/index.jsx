import React from 'react';
import PropTypes from 'prop-types';
import styles from './customerRowStyles';
import getCurrencyFormat from '../../helpers/getCurrencyFormat';
import Button from '../Button';

function CustomerRow({ customer }) {
  const getInstallmentsTotal = (installments) => {
    const total = installments.reduce((acc, curr) => acc + curr.value, 0);
    const formattedTotal = getCurrencyFormat(total, 'pt-BR', 'currency', 'BRL');

    return formattedTotal;
  };

  const {
    CustomerRowStyle,
    CustomerCell,
    CustomerActions,
  } = styles;

  const removeButtonConfig = {
    backgroundColor: 'red',
    fontColor: 'white',
    fontSize: '1.2vw',
    width: '45%',
  };

  const detailsButtonConfig = {
    backgroundColor: 'lightgreen',
    fontColor: 'black',
    fontSize: '1.2vw',
    width: '45%',
  };

  return (
    <CustomerRowStyle>
      <CustomerCell>{customer.name}</CustomerCell>
      <CustomerCell>{customer.email}</CustomerCell>
      <CustomerCell>{customer.phone}</CustomerCell>
      <CustomerCell>{getInstallmentsTotal(customer.installments)}</CustomerCell>
      <CustomerCell>
        <CustomerActions>
          <Button
            config={removeButtonConfig}
          >
            Remover
          </Button>
          <Button
            config={detailsButtonConfig}
          >
            Detalhes
          </Button>
        </CustomerActions>
      </CustomerCell>
    </CustomerRowStyle>
  );
}

CustomerRow.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    installments: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default CustomerRow;
