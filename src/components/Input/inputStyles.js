import styled from 'styled-components';

const InputStyle = styled.input`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: none;
  border-radius: 15px;
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize};
  padding: 10px;
  width: ${({ width }) => width};

  @media (max-width: 540px) {
    width: 80%;
    font-size: 5vw;
  }
`;

const styles = {
  InputStyle,
};

export default styles;
