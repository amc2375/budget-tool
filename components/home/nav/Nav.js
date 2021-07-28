import React from 'react';
import Logos from './Logos.js';
import Menu from './Menu.js';
import styles from './Nav.module.scss';
export default function Nav() {

  return (
    <React.Fragment>
      <Logos/>
      <Menu/>
    </React.Fragment>
  );
};
