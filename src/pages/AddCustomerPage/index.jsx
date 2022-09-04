import React from 'react';
import styles from './addCustomerPageStyles';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

function AddCustomerPage() {
  const {
    AddCustomerPageSection,
    FormSection,
    AddCustomerForm,
    FormSectionTitle,
  } = styles;

  const onAddButtonClick = (event) => {
    event.preventDefault();
    console.log('Add button clicked');
  };

  const addButtonConfig = {
    backgroundColor: 'green',
    width: '50%',
    fontColor: 'white',
    fontSize: '2vw',
    margin: '3rem 0 0 0',
    onClick: onAddButtonClick,
  };

  return (
    <AddCustomerPageSection>
      <Header
        pageTitle="Adicionar novo cliente"
      />
      <AddCustomerForm>
        <FormSection>
          <FormSectionTitle>Nome</FormSectionTitle>
          <Input
            placeHolder="Escreva o nome do cliente"
            width="85%"
            backgroundColor="#D1D1D1"
            name="name"
          />
        </FormSection>
        <FormSection>
          <FormSectionTitle>Email</FormSectionTitle>
          <Input
            placeHolder="Escreva o email do cliente"
            width="85%"
            backgroundColor="#D1D1D1"
            name="email"
          />
        </FormSection>
        <FormSection>
          <FormSectionTitle>Celular</FormSectionTitle>
          <Input
            placeHolder="Escreva o celular do cliente"
            inputType="number"
            width="85%"
            backgroundColor="#D1D1D1"
            name="phone"
          />
        </FormSection>
        <FormSection>
          <FormSectionTitle>Valor das parcelas</FormSectionTitle>
          <Input
            placeHolder="Escreva o valor de cada parcela"
            inputType="number"
            width="85%"
            backgroundColor="#D1D1D1"
            name="installmentsValue"
          />
        </FormSection>
        <FormSection>
          <FormSectionTitle>Número de parcelas</FormSectionTitle>
          <Input
            placeHolder="Escreva o número de parcelas a dividir"
            inputType="number"
            width="85%"
            backgroundColor="#D1D1D1"
            name="installmentsCount"
          />
        </FormSection>
        <Button
          config={addButtonConfig}
        >
          Adicionar
        </Button>
      </AddCustomerForm>
    </AddCustomerPageSection>
  );
}

export default AddCustomerPage;
