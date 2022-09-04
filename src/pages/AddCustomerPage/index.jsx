import React from 'react';
import styles from './addCustomerPageStyles';
import Header from '../../components/Header';
import Input from '../../components/Input';

function AddCustomerPage() {
  const {
    AddCustomerPageSection,
    FormSection,
    AddCustomerForm,
    FormSectionTitle,
  } = styles;
  return (
    <AddCustomerPageSection>
      <Header
        pageTitle="Adicionar novo cliente"
      />
      <AddCustomerForm>
        <FormSection>
          <FormSectionTitle>Nome do Cliente</FormSectionTitle>
          <Input
            placeHolder="Escreva o nome do cliente"
          />
        </FormSection>
      </AddCustomerForm>
    </AddCustomerPageSection>
  );
}

export default AddCustomerPage;
