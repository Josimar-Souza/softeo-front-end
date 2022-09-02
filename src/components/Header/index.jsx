import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import headerStyles from './headerStyle';
import Button from '../Button';

function Header({ pageTitle }) {
  const { HeaderStyle, PageTitle } = headerStyles;
  const navigate = useNavigate();

  const onAddCustomerClick = () => {
    navigate('/add-customer');
  };

  const buttonConfig = {
    backgroundColor: '#ff9fe5',
    fontColor: '#696773',
    fontSize: '2vw',
    width: '20%',
    onClick: onAddCustomerClick,
  };

  return (
    <HeaderStyle>
      <PageTitle>{ pageTitle }</PageTitle>
      <Button
        config={buttonConfig}
      >
        Adicionar cliente
      </Button>
    </HeaderStyle>
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Header;
