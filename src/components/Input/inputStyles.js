import styled from 'styled-components';

const InputStyle = styled.input`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: none;
  border-radius: 15px;
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize};
  padding: 10px;
  width: ${({ width }) => width};
`;

const styles = {
  InputStyle,
};

export default styles;
