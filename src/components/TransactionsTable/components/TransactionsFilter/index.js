import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

import TextInput from '../../../../assets/ui/TextInput';

const Filter = props => {
  const { onSearch } = props;

  const [search, getSearch] = useState('');

  function onChangeSearch(event) {
    getSearch(event.target.value);
    onSearch(event.target.value);
  }

  return (
    <div className={styles.filter}>
      <TextInput
        label="Search"
        value={search}
        name="search"
        onChange={onChangeSearch}
      />
    </div>
  )
};

Filter.propTypes = {
  search: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number
  ]),
  onSearch: PropTypes.func
};

export default Filter;