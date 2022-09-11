import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './addCustomerPageStyles';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import CustomersAPI from '../../api/customersAPI';

const { REACT_APP_API_URL } = process.env;
const customersAPI = new CustomersAPI(REACT_APP_API_URL, 10000);

function AddCustomerPage() {
  const navigate = useNavigate();

  const [newCustomer, setNewCustomer] = useState(
    {
      name: '',
      email: '',
      phone: '',
      installmentsValue: 0,
      installmentsCount: 0,
    },
  );
  const [feedbackMessage, setFeedbackMessage] = useState({ message: '', visible: false, color: '' });

  const {
    AddCustomerPageSection,
    FormSection,
    AddCustomerForm,
    FormSectionTitle,
    FormFeedback,
  } = styles;

  const getBusinessDay = (day) => {
    if (day === 0) {
      return 16;
    }

    if (day === 6) {
      return 17;
    }

    return 15;
  };

  const getInstallments = () => {
    const currentDate = new Date();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();

    if (month === 11) {
      month = 0;
    } else {
      month += 1;
    }

    const installments = [];

    for (let index = 0; index < newCustomer.installmentsCount; index += 1) {
      month += 1;

      if (month > 12) {
        month = 1;
        year += 1;
      }

      let nextMonth = '';

      if (month.toString().length === 1) {
        nextMonth = `0${month}`;
      } else {
        nextMonth = month;
      }

      const installmentDate = new Date(`${year}-${nextMonth}-15T00:00:00`);
      const day = getBusinessDay(installmentDate.getDay());
      const finalDate = `${day}-${nextMonth}-${year}`;

      const installment = {
        date: finalDate,
        value: Number(newCustomer.installmentsValue),
      };

      installments.push(installment);
    }

    return installments;
  };

  const onAddButtonClick = async (event) => {
    event.preventDefault();

    const {
      name,
      email,
      phone,
    } = newCustomer;

    const customer = {
      name,
      email,
      phone,
      installments: getInstallments(),
    };

    const result = await customersAPI.createNewCustomer(customer);

    if (result.status) {
      setFeedbackMessage({
        message: result.message,
        visible: true,
        color: 'red',
      });
    } else {
      setFeedbackMessage({
        message: result,
        visible: true,
        color: 'green',
      });

      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  };

  const onInputChange = ({ target: { name, value } }) => {
    setNewCustomer({
      ...newCustomer,
      [name]: value,
    });
  };

  const addButtonConfig = {
    backgroundColor: 'green',
    width: '50%',
    fontColor: 'white',
    fontSize: '2vw',
    margin: '3rem 0 0 0',
    onClick: onAddButtonClick,
  };

  const getFormFeedback = () => {
    if (feedbackMessage.visible) {
      return (
        <FormFeedback
          fontColor={feedbackMessage.color}
        >
          { feedbackMessage.message }
        </FormFeedback>
      );
    }

    return null;
  };

  return (
    <AddCustomerPageSection>
      <Header
        pageTitle="Adicionar novo cliente"
        backButton
        backUrl="/"
      />
      <AddCustomerForm>
        <FormSection>
          <FormSectionTitle>Nome</FormSectionTitle>
          <Input
            placeHolder="Escreva o nome do cliente"
            width="85%"
            backgroundColor="#D1D1D1"
            name="name"
            onChange={onInputChange}
            value={newCustomer.name}
            testId="add-customer-name-input"
          />
        </FormSection>
        <FormSection>
          <FormSectionTitle>Email</FormSectionTitle>
          <Input
            placeHolder="Escreva o email do cliente"
            width="85%"
            backgroundColor="#D1D1D1"
            name="email"
            onChange={onInputChange}
            value={newCustomer.email}
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
            onChange={onInputChange}
            value={newCustomer.phone}
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
            onChange={onInputChange}
            value={newCustomer.installmentsValue}
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
            onChange={onInputChange}
            value={newCustomer.installmentsCount}
          />
        </FormSection>
        { getFormFeedback() }
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
