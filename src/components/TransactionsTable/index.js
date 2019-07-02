import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import Typography from '../../assets/ui/Typography';
import styles from './styles.modules.scss';

const TransactionsTable = props => {
  const { transactions, columns } = props;

  return (
    <Fragment>
      <Typography element={'h1'}>Transactions</Typography>
      <ReactTable
        data={transactions}
        columns={columns}
        pageSizeOptions={[15, 50, 100]}
        defaultPageSize={15}
        className={styles.table}
      />
    </Fragment>
  )
};

TransactionsTable.propTypes = {
  transactions: PropTypes.array,
  columns: PropTypes.array,
};

TransactionsTable.defaultProps = {
  columns: [
    {
      Header: 'Payment details',
      columns: [
        {
          Header: 'Currency',
          id: 'paymentCurrency',
          accessor: d => d.payment_details.payment.currency,
        },
        {
          Header: 'Percent of sales tax',
          id: 'paymentPercent',
          accessor: d => d.payment_details.sales_tax.percent,
        },
      ]
    },
    {
      Header: 'Virtual Currency',
      columns: [
        {
          Header: 'Name',
          id: 'virtualCurrency',
          accessor: d => d.purchase.virtual_currency.name,
        },
        {
          Header: 'Amount',
          id: 'virtualAmount',
          accessor: d => d.purchase.virtual_currency.amount,
        },
        {
          Header: 'Items',
          id: 'virtualItems',
          accessor: d => d.purchase.virtual_items,
        },
      ]
    },
    {
      Header: 'Transaction',
      columns: [
        {
          Header: 'ID',
          id: 'transactionId',
          accessor: d => d.transaction.id,
        },
        {
          Header: 'Project Name',
          id: 'transactionProject',
          accessor: d => d.transaction.project.name,
        },
        {
          Header: 'Transfer date',
          id: 'transactionDate',
          accessor: d => d.transaction.transfer_date, // need moment
        },
      ]
    },
  ]
};

export default TransactionsTable;