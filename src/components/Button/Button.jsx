import React from 'react';
import style from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ text, type, link, element }) => {
  if (type === 'button') {
    return (
      <button className={[style.button, 'button'].join(' ')} onClick={element}>
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

  if (type === 'link') {
    return (
      <a href={link} target="_blank" rel="noreferrer" className={style.button}>
        {text}
      </a>
    );
  }
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  element: PropTypes.func,
};

Button.defaultProps = {
  location: '',
  link: '',
};

export default Button;
