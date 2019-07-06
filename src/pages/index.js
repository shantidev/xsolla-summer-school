import React, { useEffect } from 'react';
import TransactionsTable from '../containers/TransactionsTable';
import TransactionsFilter from '../containers/TransactionsTable/components/TransactionsFilter';
import Layout from '../layouts/Layout';
import Wrapper from '../layouts/Wrapper';

export default () => {
  useEffect(() => {
    document.title = 'Transactions'
  }, []);

  return (
    <Layout>
      <Wrapper>
        <TransactionsFilter/>
        <TransactionsTable/>
      </Wrapper>
    </Layout>
  )
}