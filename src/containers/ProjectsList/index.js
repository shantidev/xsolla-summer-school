import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as transactionsModule from '../../store/modules/transactions';

import ProjectListComponent from '../../components/ProjectsList';

const ProjectList = props => {
  const { projects, getProjects, transactions, getTransactions } = props;

  useEffect( () => {
    if (transactions.length === 0) getTransactions();
    if (projects.length === 0) getProjects();
  }, [transactions.length, projects.length]);

  return (
    <ProjectListComponent projects={projects}/>
  )
};

ProjectList.propTypes = {
  projects: PropTypes.array,
};

const mapStateToProps = (state, props) => ({
  projects: state.transactions.projects || props.transactions.projects,
  transactions: state.transactions.transactions || props.transactions.transactions,
  loading: state.transactions.loading ,
});

const mapDispatchToProps = (dispatch) => ({
  getProjects: () => dispatch(transactionsModule.getProjects()),
  getTransactions: () => dispatch(transactionsModule.getTransactions()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectList);