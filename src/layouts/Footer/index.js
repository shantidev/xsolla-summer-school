import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Footer = (props) => {
  return (
    <footer className={styles.header}>
      <div className={styles.logo}>Goodbye, world! See you later.</div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
