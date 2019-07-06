import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import styles from './styles.module.scss';

const TransactionsTable = props => {
  const { transactions, columns } = props;

  return (
    <ReactTable
      data={transactions}
      columns={columns}
      pageSizeOptions={[15, 50, 100]}
      defaultPageSize={15}
      className={styles.table}
    />
  )
};

TransactionsTable.propTypes = {
  transactions: PropTypes.array,
  columns: PropTypes.array,
};

TransactionsTable.defaultProps = {
  columns: [
    {
      Header: 'Transaction',
      columns: [
        {
          Header: 'Status',
          id: 'transactionStatus',
          accessor: d => d.transaction.status,
        },
        {
          Header: 'Project Name',
          id: 'transactionProject',
          accessor: d => d.transaction.project.name,
        },
        {
          Header: 'Payment method',
          id: 'transactionPayment',
          accessor: d => d.transaction.payment_method.name,
        },
        {
          Header: 'Transfer date',
          id: 'transactionDate',
          accessor: d => moment(d.transaction.transfer_date).format('HH:mm DD/MM/YYYY'),
        },
      ]
    },
    {
      Header: 'User',
      columns: [
        {
          Header: 'Name',
          id: 'userName',
          accessor: d => d.user.name,
        },
        {
          Header: 'Email',
          id: 'userEmail',
          accessor: d => d.user.email,
        },
        {
          Header: 'Phone',
          id: 'userPhone',
          accessor: d => d.user.phone,
        },
      ]
    }
  ]
};

export default TransactionsTable;