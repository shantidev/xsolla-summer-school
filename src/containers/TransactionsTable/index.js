import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as transactionsModule from '../../store/modules/transactions';

import TransactionsTableComponent from '../../components/TransactionsTable';

const TransactionsTable = props => {
  const { transactions, getTransactions } = props;

  useEffect(() => {
    getTransactions();
  }, []);

  console.log('transactions', transactions);

  return (
    <TransactionsTableComponent/>
  )
};

const mapStateToProps = (state, props) => ({
  transactions: state.transactions || props.transactions
});

const mapDispatchToProps = (dispatch) => ({
  getTransactions: () => dispatch(transactionsModule.getTransactions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionsTable);