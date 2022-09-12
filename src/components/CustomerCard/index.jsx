import React from 'react';
import PropTypes from 'prop-types';
import styles from './customerCardStyles';
import phoneNumberFormatter from '../../helpers/phoneNumberFormatter';
import getCurrencyFormat from '../../helpers/getCurrencyFormat';
import Button from '../Button';

function CustomerCard({ customer, setRemoveModal }) {
  const {
    CardStyle,
    CustomerName,
    CustomerInfo,
    ActionsSection,
  } = styles;

  const getInstallmentTotal = (installments) => {
    const total = installments.reduce((acc, curr) => acc + curr.value, 0);

    return getCurrencyFormat(total, 'pt-BR', 'currency', 'BRL');
  };

  const removeButtonConfig = {
    backgroundColor: 'red',
    fontColor: 'white',
    phoneFontSize: '4.5vw',
    phoneWidth: '40%',
    onClick: () => setRemoveModal({ visible: true, customer }),
  };

  const detailsButtonConfig = {
    backgroundColor: 'lightgreen',
    fontColor: 'black',
    phoneFontSize: '4.5vw',
    phoneWidth: '40%',
  };

  return (
    <CardStyle>
      <CustomerName>{ customer.name }</CustomerName>
      <CustomerInfo>{`Email: ${customer.email}`}</CustomerInfo>
      <CustomerInfo>{`Celular: ${phoneNumberFormatter(customer.phone)}`}</CustomerInfo>
      <CustomerInfo>{`Total: ${getInstallmentTotal(customer.installments)}`}</CustomerInfo>
      <ActionsSection>
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
      </ActionsSection>
    </CardStyle>
  );
}

CustomerCard.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    installments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
  setRemoveModal: PropTypes.func.isRequired,
};

export default CustomerCard;
