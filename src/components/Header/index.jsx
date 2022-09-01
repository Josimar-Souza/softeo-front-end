import React from 'react';
import PropTypes from 'prop-types';
import headerStyles from './headerStyle';

function Header({ pageTitle }) {
  const { HeaderStyle, PageTitle } = headerStyles;
  return (
    <HeaderStyle>
      <PageTitle>{ pageTitle }</PageTitle>
    </HeaderStyle>
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Header;
