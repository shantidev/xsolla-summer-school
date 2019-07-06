import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import styles from './styles.modules.scss';

const ProjectList = props => {
  const { projects, columns } = props;

  return (
    <ReactTable
      data={projects}
      columns={columns}
      pageSizeOptions={[15, 50, 100]}
      defaultPageSize={15}
      className={styles.table}
    />
  )
};

ProjectList.propTypes = {
  projects: PropTypes.array,
  columns: PropTypes.array,
};

ProjectList.defaultProps = {
  columns: [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Project name',
      accessor: 'name',
    },
  ],
};

export default ProjectList;