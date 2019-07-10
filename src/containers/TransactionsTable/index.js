import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as transactionsModule from '../../store/modules/transactions/action';

import TransactionsTableComponent from '../../components/TransactionsTable';

const TransactionsTable = props => {
  const { transactions, getTransactions, filter } = props;
  const isEmptyTransactions = transactions.length === 0;
  const isEmptySearch = filter.search.length === 0;

  useEffect(() => {
    if (isEmptyTransactions && isEmptySearch) {
      getTransactions();
    }
  }, [filter.search.length, transactions.length]);

  return (
    <TransactionsTableComponent
      transactions={transactions}
      searchValue={filter.search}
    />
  );
};

TransactionsTable.propTypes = {
  transactions: PropTypes.array,
  getTransactions: PropTypes.func
};

const mapStateToProps = (state, props) => ({
  transactions:
    state.transactions.transactions || props.transactions.transactions,
  loading: state.transactions.loading,
  filter: state.transactions.filter
});

const mapDispatchToProps = dispatch => ({
  getTransactions: () => dispatch(transactionsModule.getTransactions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsTable);
