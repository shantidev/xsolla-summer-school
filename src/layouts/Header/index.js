import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

import Container from '../Container';

const Header = (props) => {
  const { name = 'WorldWorldWorldWorldWorldWorldWorldWorld' } = props;

  return (
    <header className={styles.header}>
      <Container className={styles.wrapper}>
        <div className={styles.logo}>UNICORN</div>
        <div className={styles.profile}>Hello, {name} </div>
      </Container>
    </header>
  );
};

Header.propTypes = {};

export default Header;
