import styled from 'styled-components';

const DetailsPageSection = styled.section`
  align-items: center;
  background-color: #D1D1D1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const CustomerInfoSection = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 15px;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
  max-width: 100%;
  padding: 12px;
  width: 80%;
`;

const CustomerName = styled.h1`
  font-size: 3vw;
  text-align: center;
`;

const CustomerInfo = styled.p`
  font-size: 1.5vw;
  margin: 2rem 0;
  text-align: center;
`;

const InstalmmentsContainer = styled.ol``;

const styles = {
  DetailsPageSection,
  CustomerInfoSection,
  CustomerName,
  CustomerInfo,
  InstalmmentsContainer,
};

export default styles;
