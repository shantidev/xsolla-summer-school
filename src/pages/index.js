import React from 'react';
import TransactionsTable from '../containers/TransactionsTable';
import Layout from '../layouts/Layout';
import Wrapper from '../layouts/Wrapper';

export default () => (
  <Layout>
    <Wrapper>
      <TransactionsTable/>
    </Wrapper>
  </Layout>
);