import styled from 'styled-components';

const MainPageSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
`;

const ClientsTable = styled.table`
  border-collapse: collapse;
  margin-top: 50px;
  max-width: 100%;
  width: 80%;
`;

const TableHeaderRow = styled.tr`
  border-bottom: 1px solid #fc9f5b;
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
