import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './detailsPage';
import Header from '../../components/Header';
import CustomersAPI from '../../api/customersAPI';
import getCurrencyFormat from '../../helpers/getCurrencyFormat';
import phoneNumberFormatter from '../../helpers/phoneNumberFormatter';
import Loading from '../../components/Loading';

const { REACT_APP_API_URL } = process.env;
export const customersAPI = new CustomersAPI(REACT_APP_API_URL, 10000);

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

  const getInstallments = (installment, index) => {
    const date = new Date(installment.date);
    const formattedDate = `${date.getDate()}/${formatMonth(date.getMonth() + 1)}/${date.getFullYear()}`;
    const key = `${date}-${index}`;

    return (
      <li key={key}>
        <CustomerInfo
          data-testid={`details-customer-date-${index}`}
        >
          { `Data: ${formattedDate}` }
        </CustomerInfo>
        <CustomerInfo
          data-testid={`details-customer-value-${index}`}
        >
          { `Valor: ${formatInstallmentValue(installment.value)}` }
        </CustomerInfo>
      </li>
    );
  };

  const getInstallmentsTotal = () => {
    const total = installments.reduce((acc, curr) => acc + curr.value, 0);

    return formatInstallmentValue(total);
  };

  if (Object.keys(customer).length === 0) {
    return (
      <Loading />
    );
  }

  return (
    <DetailsPageSection>
      <Header
        pageTitle={`Detalhes do cliente ${customer.name}`}
        backButton
        backUrl="/"
        phoneFontSize="4.8vw"
      />
      <CustomerInfoSection>
        <CustomerName
          data-testid="details-customer-name"
        >
          { name }
        </CustomerName>
        <CustomerInfo
          data-testid="details-customer-email"
        >
          { `Email: ${email}` }
        </CustomerInfo>
        <CustomerInfo
          data-testid="details-customer-phone"
        >
          { `Telefone: ${phoneNumberFormatter(phone)}` }
        </CustomerInfo>
        <CustomerInfo>Parcelas:</CustomerInfo>
        <InstalmmentsContainer>
          {
            installments.map((installment, index) => getInstallments(installment, index))
          }
        </InstalmmentsContainer>
        <CustomerInfo
          data-testid="details-customer-total"
        >
          {`Total: ${getInstallmentsTotal()}`}
        </CustomerInfo>
      </CustomerInfoSection>
    </DetailsPageSection>
  );
}

export default DetailsPage;
