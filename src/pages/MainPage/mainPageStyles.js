import styled from 'styled-components';

const MainPageSection = styled.section`
  align-items: center;
  background-color: #d1d1d1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  min-height: 100vh;
  width: 100%;
`;

const ClientsTable = styled.table`
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;
  width: 80%;
`;

const TableHeaderRow = styled.tr`
  border-bottom: 1px solid black;
`;

const TableHeader = styled.th`
  font-size: 2vw;
  max-width: 100%;
  padding: 1vw;
  width: 20%;
`;

export default {
  MainPageSection,
  ClientsTable,
  TableHeaderRow,
  TableHeader,
};
