import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './detailsPage';
import Header from '../../components/Header';
import CustomersAPI from '../../api/customersAPI';

const { REACT_APP_API_URL } = process.env;
const customersAPI = new CustomersAPI(REACT_APP_API_URL, 10000);

function DetailsPage() {
  const { DetailsPageSection } = styles;
  const { id } = useParams();
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    const getCustomer = async () => {
      const fetchedCustomer = await customersAPI.getCustomerById(id);
      setCustomer(fetchedCustomer);
    };

    getCustomer();
  }, []);

  return (
    <DetailsPageSection>
      <Header
        pageTitle={`Detalhes do cliente ${customer.name}`}
        backButton
        backUrl="/"
      />
    </DetailsPageSection>
  );
}

export default DetailsPage;
