import React from 'react';
import NavLink from './NavLink.js';
import styles from './Menu.module.scss';
export default function Menu() {

  return (
    <section className={styles.container}>
      <NavLink text={"Home"} path={"/"}/>
      <NavLink text={"Take the Survey"} path={"/budget-survey"}/>
      <NavLink text={"About the Project"} path={"/#about-this"}/>
      <NavLink text={"Who We Are"} path={"/#about-us"}/>
    </section>
  );
};
