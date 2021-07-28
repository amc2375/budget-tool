import React from 'react';
import NavButton from './NavButton.js';
import styles from './Menu.module.scss';
export default function Menu() {

  return (
    <React.Fragment>
      <NavButton text={"Home"}/>
      <NavButton text={"Take the Survey"}/>
    </React.Fragment>
  );
};
