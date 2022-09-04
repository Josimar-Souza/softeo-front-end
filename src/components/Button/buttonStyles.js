import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: none;
  border-radius: 15px;
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 700;
  max-width: 100%;
  margin: ${({ margin }) => margin};
  padding: 10px;
  transition: 0.1s;
  width: ${({ width }) => width};

  :hover {
    cursor: pointer;
    transform: scale(1.05, 1.05);
  }

  :active {
    transform: scale(1.1, 1.1);
  }
`;

const styles = {
  ButtonStyle,
};

export default styles;
