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
  } = config;

  return (
    <ButtonStyle
      fontSize={fontSize}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      width={width}
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
  }),
};

export default Button;
