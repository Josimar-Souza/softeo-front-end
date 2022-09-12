import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import headerStyles from './headerStyle';
import Button from '../Button';
import backButtonIcon from '../../icons/arrow-left-circle.svg';

function Header(props) {
  const {
    backUrl,
    backButton,
    pageTitle,
    phoneFontSize,
  } = props;
  const { HeaderStyle, PageTitle, BackButtonImg } = headerStyles;
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(backUrl);
  };

  const backButtonConfig = {
    onClick: onBackButtonClick,
    width: '6%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    testId: 'header-back-button',
    phoneWidth: '16%',
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
      <PageTitle
        phoneFontSize={phoneFontSize}
      >
        { pageTitle }
      </PageTitle>
      { getInvisibleItem() }
    </HeaderStyle>
  );
}

Header.defaultProps = {
  backButton: false,
  backUrl: '',
  phoneFontSize: '5vw',
};

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  backButton: PropTypes.bool,
  backUrl: PropTypes.string,
  phoneFontSize: PropTypes.string,
};

export default Header;
