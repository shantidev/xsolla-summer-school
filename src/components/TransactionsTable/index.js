import React from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

const TransactionsTable = props => {
  const testData = [
    {name: '123', age: 123},
    {name: '123123', age: 123123},
    {name: '123123123', age: 123123123}
  ];

  const colums = [
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Age',
      accessor: 'age'
    },
  ];


  return (
    <ReactTable
      data={testData}
      columns={colums}
    />
  )
};

export default TransactionsTable;