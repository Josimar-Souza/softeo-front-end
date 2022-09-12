import React from 'react';
import PropTypes from 'prop-types';
import styles from './buttonStyles';

function Button(props) {
  const { ButtonStyle } = styles;

  const {
    children,
    config,
  } = props;

  const {
    fontSize,
    fontColor,
    backgroundColor,
    width,
    onClick,
    margin,
    testId,
    phoneWidth,
    phoneFontSize,
  } = config;

  return (
    <ButtonStyle
      fontSize={fontSize}
      phoneFontSize={phoneFontSize}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      width={width}
      phoneWidth={phoneWidth}
      onClick={onClick}
      margin={margin}
      data-testid={testId}
    >
      { children }
    </ButtonStyle>
  );
}

Button.defaultProps = {
  config: {
    fontSize: '2vw',
    fontColor: 'black',
    backgroundColor: 'lightgray',
    width: '50%',
    margin: '0',
    testId: '',
    phoneWidth: '35%',
    phoneFontSize: '4vw',
  },
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  config: PropTypes.shape({
    fontSize: PropTypes.string,
    fontColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    width: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    margin: PropTypes.string,
    testId: PropTypes.string,
    phoneWidth: PropTypes.string,
    phoneFontSize: PropTypes.string,
  }),
};

export default Button;
