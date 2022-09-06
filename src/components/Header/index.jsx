import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import headerStyles from './headerStyle';
import Button from '../Button';
import backButtonIcon from '../../icons/arrow-left-circle.svg';

function Header({ pageTitle, backButton, backUrl }) {
  const { HeaderStyle, PageTitle, BackButtonImg } = headerStyles;
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(backUrl);
  };

  const backButtonConfig = {
    onClick: onBackButtonClick,
    width: '6%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  };

  const getBackButton = () => {
    if (backButton) {
      return (
        <Button
          config={backButtonConfig}
        >
          <BackButtonImg src={backButtonIcon} />
        </Button>
      );
    }
    return null;
  };

  const getInvisibleItem = () => {
    if (backButton) return <div />;

    return null;
  };

  const getFlexSpacing = () => {
    if (backButton) return 'space-between';

    return 'center';
  };

  return (
    <HeaderStyle justifyContent={getFlexSpacing()}>
      { getBackButton() }
      <PageTitle>{ pageTitle }</PageTitle>
      { getInvisibleItem() }
    </HeaderStyle>
  );
}

Header.defaultProps = {
  backButton: false,
  backUrl: '',
};

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  backButton: PropTypes.bool,
  backUrl: PropTypes.string,
};

export default Header;
