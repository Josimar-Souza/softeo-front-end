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

  @media (max-width: 540px) {
    font-size: 6vw;
  }
`;

const InputsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 100%;
  margin-top: 2rem;
  width: 80%;

  @media (max-width: 540px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

const InputTitle = styled.p`
  font-size: 1.3vw;
  margin: 0 10px;

  @media (max-width: 540px) {
    font-size: 5vw;
    margin: 10px 0;
  }
`;

const FilterTotal = styled.p`
  font-size: 2vw;
  margin-top: 1.5rem;

  @media (max-width: 540px) {
    font-size: 5vw;
  }
`;

const FeedBackMessage = styled.p`
  color: red;
  font-size: 1.3vw;
  margin-top: 10px;

  @media (max-width: 540px) {
    font-size: 4vw;
    text-align: center;
  }
`;

const styles = {
  DateFilterStyle,
  FilterTitle,
  InputsContainer,
  InputTitle,
  FilterTotal,
  FeedBackMessage,
};

export default styles;
