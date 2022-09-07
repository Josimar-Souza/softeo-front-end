import styled from 'styled-components';

const DateFilterStyle = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-top: 5rem;
  padding: 10px;
  width: 80%;
`;

const FilterTitle = styled.h1`
  font-size: 1.8vw;
`;

const InputsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 100%;
  margin-top: 2rem;
  width: 80%;
`;

const InputTitle = styled.p`
  font-size: 1.3vw;
  margin: 0 10px;
`;

const styles = {
  DateFilterStyle,
  FilterTitle,
  InputsContainer,
  InputTitle,
};

export default styles;
