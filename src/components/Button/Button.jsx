import React from 'react';
import style from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ text, type }) => {
  if (type === 'button') {
    return (
      <button className={[style.button, 'button'].join(' ')} type="button">
        {text}
      </button>
    );
  }
  if (type === 'submit') {
    return (
      <button className={[style.button, 'button'].join(' ')} type="submit">
        {text}
      </button>
    );
  }
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
