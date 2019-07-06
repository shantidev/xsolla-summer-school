import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

import TextInput from '../../../../assets/ui/TextInput';

const Filter = props => {
  const { onSearch, filter } = props;

  const [search, getSearch] = useState(filter.search);

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
  filter: PropTypes.object,
  onSearch: PropTypes.func
};

export default Filter;