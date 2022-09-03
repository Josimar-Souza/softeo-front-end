import styled from 'styled-components';

const FadeBackground = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  height: 100vh;
  justify-content: center;
  max-width: 100%;
  position: fixed;
  width: 100%;
  z-index: 2;
`;

const ModalContainer = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: space-around;
  max-width: 100%;
  padding: 10px;
  width: 60%;
`;

const ModalTitle = styled.h1`
  font-size: 2vw;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  width: 100%;
`;

const FeedbackMessage = styled.p`
  font-size: 1.5vw;
  color: ${({ fontColor }) => fontColor};
`;

const styles = {
  FadeBackground,
  ModalContainer,
  ModalTitle,
  ButtonContainer,
  FeedbackMessage,
};

export default styles;
