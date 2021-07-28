import React from 'react';
import Logos from './Logos.js';
import NavButton from './NavButton.js';
import styles from './Nav.module.scss';
export default function Nav() {

  return (
    <React.Fragment>
      <Logos/>
      <NavButton/>
      <NavButton/>
    </React.Fragment>
  );
};
