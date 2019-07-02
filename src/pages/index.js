import React, { useEffect } from 'react';
import TransactionsTable from '../containers/TransactionsTable';
import Layout from '../layouts/Layout';
import Wrapper from '../layouts/Wrapper';

export default () => {
  useEffect(() => {
    document.title = 'Transactions'
  }, []);

  return (
    <Layout>
      <Wrapper>
        <TransactionsTable/>
      </Wrapper>
    </Layout>
  )
}