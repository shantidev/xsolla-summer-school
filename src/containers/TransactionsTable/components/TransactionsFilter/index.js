import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as transactionsModule from '../../../../store/modules/transactions';

import TransactionsFilterComponent from '../../../../components/TransactionsTable/components/TransactionsFilter';

const TransactionsFilter = props => {
  const { getFilteredTransactions } = props;

  return (
    <TransactionsFilterComponent
      onSearch={getFilteredTransactions}
    />
  )
};

TransactionsFilter.propTypes = {
  getFilteredTransactions: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  getFilteredTransactions: (str) => dispatch(transactionsModule.getFilteredTransactions(str)),
});

export default connect(
  null,
  mapDispatchToProps,
)(TransactionsFilter);