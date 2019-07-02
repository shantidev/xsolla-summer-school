import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Menu = (props) => {
  const { menuData, location } = props;

  const [menuElements, getMenuElements] = useState([]);

  useEffect(() => {
    renderMenuElements(menuData);
  }, [menuData]);

  function renderMenuElements(menu) {
   const elements = menu.map((menuItem, idx) => {
      return (
        <li key={idx} className={styles.element}>
          <NavLink
            className={`${styles.link} ${location.pathname === menuItem.link && styles.activeLink}`}
            to={menuItem.link}
            >
            {menuItem.title}
          </NavLink>
        </li>
      )
    });
    getMenuElements(elements);
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        { menuElements }
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  menu: PropTypes.array,
};

Menu.defaultProps = {
  menuData: [
    {
      link: '/projects',
      title: 'All projects',
    },
    {
      link: '/statistics',
      title: 'Chart',
    },
  ]
};

export default withRouter(Menu);
