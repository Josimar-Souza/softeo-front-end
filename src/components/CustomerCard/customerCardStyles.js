import styled from 'styled-components';

const CardStyle = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 15px;
  box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  margin: 3rem auto;
  padding: 15px;
  width: 80%;
`;

const CustomerName = styled.h1``;

const CustomerInfo = styled.p`
  margin: 15px 0;
`;

const ActionsSection = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 100%;
  width: 100%;
`;

const styles = {
  CardStyle,
  CustomerName,
  CustomerInfo,
  ActionsSection,
};

export default styles;
