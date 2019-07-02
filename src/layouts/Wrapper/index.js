import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Wrapper = (props) => {
  const { children, className } = props;

  return (
    <div className={`${styles.wrapper} ${className}`}>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Wrapper;
