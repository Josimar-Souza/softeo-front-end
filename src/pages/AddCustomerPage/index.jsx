import React from 'react';
import styles from './addCustomerPageStyles';
import Header from '../../components/Header';

function AddCustomerPage() {
  const { AddCustomerPageSection } = styles;
  return (
    <AddCustomerPageSection>
      <Header
        pageTitle="Adicionar novo cliente"
      />
    </AddCustomerPageSection>
  );
}

export default AddCustomerPage;
