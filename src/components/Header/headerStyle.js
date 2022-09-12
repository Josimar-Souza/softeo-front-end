import styled from 'styled-components';

const HeaderStyle = styled.div`
  align-items: center;
  background-color: #FC9F5B;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  max-width: 100%;
  padding: 20px;
  width: 100%;
`;

const PageTitle = styled.h1`
  color: #607196;
  font-size: 3vw;

  @media (max-width: 540px) {
    font-size: 8vw;
  }
`;

const BackButtonImg = styled.img`
  width: 100%;
`;

export default {
  HeaderStyle,
  PageTitle,
  BackButtonImg,
};
