import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss'
import ROUTES from '../../constants/routes';

import Container from '../Container';
import Menu from './components/Menu';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.wrapper}>
        <div className={styles.logo}>
          <Link className={styles.logoLink} to={ROUTES.index}>Transactions</Link>
        </div>
        <Menu/>
      </Container>
    </header>
  );
};

export default Header;
