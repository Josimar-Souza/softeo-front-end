import React from 'react';
import mainPageStyles from './mainPageStyles';
import Header from '../../components/Header';

function MainPage() {
  const {
    MainPageSection,
    ClientsTable,
    TableHeaderRow,
    TableHeader,
  } = mainPageStyles;
  return (
    <MainPageSection>
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
        </tbody>
      </ClientsTable>
    </MainPageSection>
  );
}

export default MainPage;
