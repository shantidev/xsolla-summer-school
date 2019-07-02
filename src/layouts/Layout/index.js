import React from 'react';
import Header from '../Header';
import Container from '../Container';
import Background from '../Background';
import styles from './styles.module.scss';

const Layout = (props) => {
  const { children } = props;

  return (
    <Background className={styles.wrapper}>
      <Header/>
      <Container>
        {children}
      </Container>
      {/*<footer>123</footer>*/}
    </Background>
  );
};

export default Layout;