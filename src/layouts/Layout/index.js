import React from 'react';
import Header from '../Header';
import Container from '../Container';
import Wrapper from '../Wrapper';
import styles from './styles.module.scss';

const Layout = (props) => {
  const { children } = props;

  return (
    <Wrapper className={styles.wrapper}>
      <Header/>
      <Container>
        {children}
      </Container>
      {/*<footer>123</footer>*/}
    </Wrapper>
  );
};

export default Layout;