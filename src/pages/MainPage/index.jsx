import React, { useEffect, useState } from 'react';
import CustomersAPI from '../../api/customersAPI';
import mainPageStyles from './mainPageStyles';
import Header from '../../components/Header';
import CustomerRow from '../../components/CustomerRow';
import RemoveModal from '../../components/RemoveModal';

const { REACT_APP_API_URL } = process.env;
const customersAPI = new CustomersAPI(REACT_APP_API_URL, 10000);

function MainPage() {
  const [customers, setCustomers] = useState([]);
  const [removeModal, setRemoveModal] = useState({ visible: false, customer: {} });

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

  return (
    <MainPageSection>
      { getRemoveModal() }
      <Header
        pageTitle="Clientes"
      />
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
            customers.map((customer) => (
              <CustomerRow
                key={customer._id}
                customer={customer}
                config={modalConfig}
              />
            ))
          }
        </tbody>
      </ClientsTable>
    </MainPageSection>
  );
}

export default MainPage;
