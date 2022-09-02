import styled from 'styled-components';

const CustomerRowStyle = styled.tr`
  border-bottom: 1px solid #fc9f5b;
`;

const CustomerCell = styled.td`
  font-size: 1.4vw;
  text-align: center;
  padding: 10px;
`;

const CustomerActions = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  width: 100%;
`;

const styles = {
  CustomerRowStyle,
  CustomerCell,
  CustomerActions,
};

export default styles;
