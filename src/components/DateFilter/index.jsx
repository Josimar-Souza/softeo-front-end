import React from 'react';
import styles from './dateFilterStyles';
import Input from '../Input';

function DateFilter() {
  const {
    DateFilterStyle,
    FilterTitle,
    InputsContainer,
    InputTitle,
  } = styles;

  return (
    <DateFilterStyle>
      <FilterTitle>Ganhos por periodo</FilterTitle>
      <InputsContainer>
        <InputTitle>De</InputTitle>
        <Input
          width="20%"
        />
        <InputTitle>Até</InputTitle>
        <Input
          width="20%"
        />
      </InputsContainer>
    </DateFilterStyle>
  );
}

export default DateFilter;
