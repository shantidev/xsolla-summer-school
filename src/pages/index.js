import React, { useEffect } from 'react';
import TransactionsTable from '../containers/TransactionsTable';
import TransactionsFilter from '../containers/TransactionsTable/components/TransactionsFilter';
import Layout from '../layouts/Layout';
import Wrapper from '../layouts/Wrapper';
import Typography from "../assets/ui/Typography";

export default () => {
  useEffect(() => {
    document.title = 'Transactions'
  }, []);

  return (
    <Layout>
      <Wrapper>
        <Typography element={'h1'}>Transactions</Typography>
        <TransactionsFilter/>
        <TransactionsTable/>
      </Wrapper>
    </Layout>
  )
}