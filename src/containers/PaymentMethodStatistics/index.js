import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as transactionsModule from '../../store/modules/transactions/action';
import PaymentMethodStatisticsComponent from '../../components/PaymentMethodStatistics';

const PaymentMethodStatistics = props => {
  const { getStatistics, statistics } = props;

  useEffect( () => {
    if (statistics.length === 0) {
      getStatistics();
    }
  }, [statistics.length]);

  return (
    <PaymentMethodStatisticsComponent statistics={statistics}/>
  )
};

PaymentMethodStatistics.propTypes = {
  statistics: PropTypes.array,
  getStatistics: PropTypes.func,
};

const mapStateToProps = (state) => ({
  statistics: state.transactions.statisticsOfPaymentMethod,
});

const mapDispatchToProps = (dispatch) => ({
  getStatistics: () => dispatch(transactionsModule.getStatisticsOfPaymentMethod())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaymentMethodStatistics);