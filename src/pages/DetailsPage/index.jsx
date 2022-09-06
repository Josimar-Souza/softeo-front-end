import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './detailsPage';
import Header from '../../components/Header';
import CustomersAPI from '../../api/customersAPI';
import getCurrencyFormat from '../../helpers/getCurrencyFormat';

const { REACT_APP_API_URL } = process.env;
const customersAPI = new CustomersAPI(REACT_APP_API_URL, 10000);

function DetailsPage() {
  const {
    DetailsPageSection,
    CustomerInfoSection,
    CustomerName,
    CustomerInfo,
    InstalmmentsContainer,
  } = styles;

  const { id } = useParams();
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    const getCustomer = async () => {
      const fetchedCustomer = await customersAPI.getCustomerById(id);
      setCustomer(fetchedCustomer);
    };

    getCustomer();
  }, []);

  const formatInstallmentValue = (value) => getCurrencyFormat(value, 'pt-BR', 'currency', 'BRL');

  const {
    name,
    email,
    phone,
    installments,
  } = customer;

  const formatMonth = (month) => {
    if (month.toString().length === 1) {
      return `0${month}`;
    }

    return month;
  };

  const getInstallments = (installment) => {
    const date = new Date(installment.date);
    const formattedDAte = `${date.getDate()}/${formatMonth(date.getMonth() + 1)}/${date.getFullYear()}`;

    return (
      <li>
        <CustomerInfo>{ formattedDAte }</CustomerInfo>
        <CustomerInfo>{ formatInstallmentValue(installment.value) }</CustomerInfo>
      </li>
    );
  };

  return (
    <DetailsPageSection>
      <Header
        pageTitle={`Detalhes do cliente ${customer.name}`}
        backButton
        backUrl="/"
      />
      <CustomerInfoSection>
        <CustomerName>{ name }</CustomerName>
        <CustomerInfo>{ `Email: ${email}` }</CustomerInfo>
        <CustomerInfo>{ `Telefone: ${phone}` }</CustomerInfo>
        <InstalmmentsContainer>
          {
            installments.map((installment) => getInstallments(installment))
          }
        </InstalmmentsContainer>
      </CustomerInfoSection>
    </DetailsPageSection>
  );
}

export default DetailsPage;
