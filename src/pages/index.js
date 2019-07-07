import React, {useEffect} from 'react';
import TransactionsTable from '../containers/TransactionsTable';
import TransactionsFilter from '../containers/TransactionsTable/components/TransactionsFilter';
import Wrapper from '../layouts/Wrapper';

export default () => {
  useEffect(() => {
    document.title = 'Transactions'
  }, []);

  return (
    <Wrapper>
      <TransactionsFilter/>
      <TransactionsTable/>
    </Wrapper>
  )
}