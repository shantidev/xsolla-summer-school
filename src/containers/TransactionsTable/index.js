import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as transactionsModule from '../../store/modules/transactions';

import TransactionsTableComponent from '../../components/TransactionsTable';

const TransactionsTable = props => {
  const { transactions, getTransactions, isFilterOn } = props;

  useEffect(() => {
    if (transactions.length === 0 && !isFilterOn) {
      getTransactions();
    }
  }, [isFilterOn, transactions.length]);

  return (
    <TransactionsTableComponent
      transactions={transactions}
    />
  )
};

TransactionsTable.propTypes = {
  transactions: PropTypes.array,
  getTransactions: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  transactions: state.transactions.transactions || props.transactions.transactions,
  loading: state.transactions.loading,
  isFilterOn: state.transactions.isFilterOn,
});

const mapDispatchToProps = (dispatch) => ({
  getTransactions: () => dispatch(transactionsModule.getTransactions()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionsTable);