import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Typography = props => {
  const { children, element, type } = props;

  function getTypographyElement() {
    const typesMap = new Map([
      ['h1', () => <h1 className={`${styles[element + type]}`}>{children}</h1>],
      ['h2', () => <h2 className={`${styles[element + type]}`}>{children}</h2>],
    ]);
    return typesMap.get(element)();
  }

  return getTypographyElement();
};

Typography.propTypes = {
  element: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Typography.defaultProps = {
  type: 'Default',
};

export default Typography;