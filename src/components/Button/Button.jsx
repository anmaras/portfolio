import React from 'react';
import style from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ text, type, link, location }) => {
  if (type === 'button') {
    return (
      <a className={[style.button, 'button'].join(' ')} href={`#${location}`}>
        {text}
      </a>
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
  location: PropTypes.string.isRequired,
};

Button.defaultProps = {
  location: '',
  link: '',
};

export default Button;
