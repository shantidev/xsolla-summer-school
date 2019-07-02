import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Container = (props) => {
  const { children, className } = props;

  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Container;
