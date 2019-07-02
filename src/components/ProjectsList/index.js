import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import Typography from '../../assets/ui/Typography';
import styles from './styles.modules.scss';

const ProjectList = props => {
  const { projects, columns } = props;

  return (
    <Fragment>
      <Typography element={'h1'}>Projects</Typography>
      <ReactTable
        data={projects}
        columns={columns}
        pageSizeOptions={[15, 50, 100]}
        defaultPageSize={15}
        className={styles.table}
      />
    </Fragment>
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