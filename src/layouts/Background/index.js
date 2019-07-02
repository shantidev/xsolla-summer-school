import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Background = (props) => {
  const { children } = props;

  return (
    <div className={`${styles.background}`}>
      {children}
    </div>
  );
};

Background.propTypes = {
  children: PropTypes.any,
};

export default Background;
