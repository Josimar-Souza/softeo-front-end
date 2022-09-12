import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './dateFilterStyles';
import Input from '../Input';
import Button from '../Button';
import getCurrencyFormat from '../../helpers/getCurrencyFormat';

function DateFilter({ customers }) {
  const [filter, setFilter] = useState({ from: '', to: '', total: 0 });
  const [feedbackMessage, setFeedbackMessage] = useState(false);

  const {
    DateFilterStyle,
    FilterTitle,
    InputsContainer,
    InputTitle,
    FilterTotal,
    FeedBackMessage,
  } = styles;

  const dateFormatter = (date) => {
    if (date.includes('/')) {
      const splitedDate = date.split('/');

      return new Date(`${splitedDate[2]}-${splitedDate[1]}-${splitedDate[0]}T00:00:00`);
    }

    return new Date(date);
  };

  const onFilterButtonClick = () => {
    const datePattern = /\d{2}(\/)\d{2}(\/)\d{4}/;

    if (datePattern.test(filter.from) && datePattern.test(filter.to)) {
      const filteredInstallments = [];
      const formattedFromDate = dateFormatter(filter.from);
      const formattedToDate = dateFormatter(filter.to);

      customers.forEach((customer) => {
        customer.installments.forEach((installment) => {
          const installmentDate = dateFormatter(installment.date);

          if (installmentDate >= formattedFromDate && installmentDate <= formattedToDate) {
            filteredInstallments.push(installment);
          }
        });
      });

      const total = filteredInstallments.reduce((acc, curr) => acc + curr.value, 0);
      setFilter({ ...filter, total });
    } else {
      setFeedbackMessage(true);
      setFilter({ ...filter, total: 0 });
      setTimeout(() => {
        setFeedbackMessage(false);
      }, 3000);
    }
  };

  const onInputChange = ({ target: { name, value } }) => {
    setFilter({ ...filter, [name]: value });
  };

  const filterButtonConfig = {
    backgroundColor: 'white',
    margin: '0 10px',
    fontSize: '2vw',
    phoneFontSize: '5vw',
    phoneWidth: '50%',
    width: '15%',
    onClick: onFilterButtonClick,
  };

  const getFeedbackMessage = () => {
    if (feedbackMessage) {
      return (
        <FeedBackMessage>Datas precisam estar no formato dd/mm/aaaa</FeedBackMessage>
      );
    }

    return null;
  };

  return (
    <DateFilterStyle>
      <FilterTitle>Ganhos por período</FilterTitle>
      { getFeedbackMessage() }
      <InputsContainer>
        <InputTitle>De</InputTitle>
        <Input
          width="20%"
          name="from"
          value={filter.from}
          onChange={onInputChange}
          testId="filter-input-from"
        />
        <InputTitle>Até</InputTitle>
        <Input
          width="20%"
          name="to"
          value={filter.to}
          onChange={onInputChange}
          testId="filter-input-to"
        />
        <Button
          config={filterButtonConfig}
        >
          Filtrar
        </Button>
      </InputsContainer>
      <FilterTotal
        data-testid="filter-total"
      >
        { getCurrencyFormat(filter.total, 'pt-BR', 'currency', 'BRL') }
      </FilterTotal>
    </DateFilterStyle>
  );
}

DateFilter.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default DateFilter;
