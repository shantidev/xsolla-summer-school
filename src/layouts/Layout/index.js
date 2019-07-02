import React from 'react';
import Header from '../Header';
import Container from '../Container';
import Background from '../Background';

const Layout = (props) => {
  const { children } = props;

  return (
    <Background>
      <Header/>
      <Container>
        {children}
      </Container>
    </Background>
  );
};

export default Layout;