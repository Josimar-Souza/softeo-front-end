import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import CustomersAPI from '../../api/customersAPI';
import mainPageStyles from './mainPageStyles';
import Header from '../../components/Header';
import CustomerRow from '../../components/CustomerRow';
import RemoveModal from '../../components/RemoveModal';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import DateFilter from '../../components/DateFilter';
import CustomerCard from '../../components/CustomerCard';

const { REACT_APP_API_URL } = process.env;
export const customersAPI = new CustomersAPI(REACT_APP_API_URL, 10000);

function MainPage() {
  const [customers, setCustomers] = useState([]);
  const [removeModal, setRemoveModal] = useState({ visible: false, customer: {} });
  const navigate = useNavigate();

  useEffect(() => {
    const getCustomers = async () => {
      const fetchedCustomers = await customersAPI.getAllCustomers();

      setCustomers(fetchedCustomers);
    };

    getCustomers();
  }, []);

  const {
    MainPageSection,
    ClientsTable,
    TableHeaderRow,
    TableHeader,
    PhoneClientsSection,
  } = mainPageStyles;

  const refreshPage = () => {
    window.location.reload();
  };

  const modalConfig = {
    setRemoveModal,
    refreshPage,
  };

  const getRemoveModal = () => {
    if (removeModal.visible) {
      return (
        <RemoveModal
          customer={removeModal.customer}
          config={modalConfig}
        />
      );
    }

    return null;
  };

  const onAddCustomerClick = () => {
    navigate('/add-customer');
  };

  const addCustomerButtonConfig = {
    onClick: onAddCustomerClick,
    fontSize: '1.5vw',
    margin: '5rem 0 2rem 0',
    phoneFontSize: '5vw',
  };

  const getCustomersTable = () => {
    if (isMobile) {
      return (
        <PhoneClientsSection>
          {
            customers.map((customer) => (
              <CustomerCard customer={customer} />
            ))
          }
        </PhoneClientsSection>
      );
    }

    return (
      <ClientsTable>
        <tbody>
          <TableHeaderRow>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Celular</TableHeader>
            <TableHeader>Total</TableHeader>
            <TableHeader>Ações</TableHeader>
          </TableHeaderRow>
          {
            customers.map((customer, index) => (
              <CustomerRow
                key={customer._id}
                customer={customer}
                config={modalConfig}
                index={index}
              />
            ))
          }
        </tbody>
      </ClientsTable>
    );
  };

  if (customers.length === 0) {
    return (
      <Loading />
    );
  }

  return (
    <MainPageSection>
      { getRemoveModal() }
      <Header
        pageTitle="Clientes"
        phoneFontSize="10vw"
      />
      <DateFilter
        customers={customers}
      />
      <Button
        config={addCustomerButtonConfig}
      >
        Adicionar cliente
      </Button>
      { getCustomersTable() }
    </MainPageSection>
  );
}

export default MainPage;
