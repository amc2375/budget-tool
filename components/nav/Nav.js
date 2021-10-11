import React from 'react';
import Logos from './Logos.js'; // not currently used
import Menu from './Menu.js';
import styles from './Nav.module.scss';
export default function Nav() {

  return (
    <nav className={styles.container}>
      <Menu/>
    </nav>
  );
};
