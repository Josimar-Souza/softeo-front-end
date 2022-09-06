import styled from 'styled-components';

const LoadingStyle = styled.div`
  align-items: center;
  background-color: #D1D1D1;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

const LoadingContainer = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 15px;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  max-width: 100%;
  padding: 12px;
  width: 50%;
`;

const LoadingTitle = styled.h1`
  fontSize: 3vw;
  margin: 15px;
`;

const styles = {
  LoadingStyle,
  LoadingTitle,
  LoadingContainer,
};

export default styles;
