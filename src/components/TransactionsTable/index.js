import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { highlightString } from '../../helpers/strings';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import styles from './styles.module.scss';

const TransactionsTable = props => {
  const { transactions, searchValue } = props;

  const columns = [
    {
      Header: 'Transaction',
      columns: [
        {
          Header: 'Status',
          id: 'transactionStatus',
          accessor: d => highlightString(d.transaction.status, searchValue)
        },
        {
          Header: 'Project Name',
          id: 'transactionProject',
          accessor: d =>
            highlightString(d.transaction.project.name, searchValue)
        },
        {
          Header: 'Payment method',
          id: 'transactionPayment',
          accessor: d =>
            highlightString(d.transaction.payment_method.name, searchValue)
        },
        {
          Header: 'Transfer date',
          id: 'transactionDate',
          accessor: d =>
            highlightString(
              moment(d.transaction.transfer_date).format('HH:mm DD/MM/YYYY'),
              searchValue
            )
        }
      ]
    },
    {
      Header: 'User',
      columns: [
        {
          Header: 'Name',
          id: 'userName',
          accessor: d => highlightString(d.user.name, searchValue)
        },
        {
          Header: 'Email',
          id: 'userEmail',
          accessor: d => highlightString(d.user.email, searchValue)
        },
        {
          Header: 'Phone',
          id: 'userPhone',
          accessor: d => highlightString(d.user.phone, searchValue)
        }
      ]
    }
  ];

  return (
    <ReactTable
      data={transactions}
      columns={columns}
      pageSizeOptions={[15, 50, 100]}
      defaultPageSize={15}
      className={styles.table}
    />
  );
};

TransactionsTable.propTypes = {
  transactions: PropTypes.array
};

export default TransactionsTable;
