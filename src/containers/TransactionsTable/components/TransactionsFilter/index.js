import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as transactionsModule from '../../../../store/modules/transactions';

import TransactionsFilterComponent from '../../../../components/TransactionsTable/components/TransactionsFilter';

const TransactionsFilter = props => {
  const { getFilteredTransactions, filter } = props;

  return (
    <TransactionsFilterComponent
      filter={filter}
      onSearch={getFilteredTransactions}
    />
  )
};

TransactionsFilter.propTypes = {
  filter: PropTypes.object,
  getFilteredTransactions: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  filter: state.transactions.filter || props.transaction.filter,
});

const mapDispatchToProps = (dispatch) => ({
  getFilteredTransactions: (str) => dispatch(transactionsModule.getFilteredTransactions(str)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionsFilter);