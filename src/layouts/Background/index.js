import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Background = (props) => {
  const { children, className } = props;

  return (
    <div className={`${styles.wrapper} ${className}`}>
      {children}
    </div>
  );
};

Background.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Background;
