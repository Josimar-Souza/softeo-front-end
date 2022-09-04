import React from 'react';
import PropTypes from 'prop-types';
import styles from './inputStyles';

function Input(props) {
  const { InputStyle } = styles;

  const {
    placeHolder,
    width,
    fontSize,
    onChange,
    value,
    backgroundColor,
    fontColor,
  } = props;

  return (
    <InputStyle
      placeholder={placeHolder}
      width={width}
      fontSize={fontSize}
      onChange={onChange}
      value={value}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
    />
  );
}

Input.defaultProps = {
  placeHolder: '',
  width: '50%',
  fontSize: '1.5vw',
  backgroundColor: 'white',
  fontColor: 'black',
};

Input.propTypes = {
  placeHolder: PropTypes.string,
  width: PropTypes.string,
  fontSize: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
};

export default Input;
