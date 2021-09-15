import React, { useState } from 'react';
import NavLink from './NavLink.js';
import styles from './Menu.module.scss';
import { useMediaQuery } from 'react-responsive';
import Hamburger from '../../static/hamburger.svg';
import X from '../../static/x.svg';
export default function Menu() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(
    false
  );

  const isMobile = useMediaQuery({ query: '(max-width: 960px)' });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const links = (
    <React.Fragment>
      <NavLink text={"Home"} path={"/"}/>
      <NavLink text={"Take the Survey"} path={"/budget-survey"}/>
      <NavLink text={"About the Project"} path={"/#about-this"}/>
      <NavLink text={"Who We Are"} path={"/#about-us"}/>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div
        className={styles.hamburger}
        onClick={toggleMobileMenu}>
        {
          !mobileMenuOpen ? <Hamburger/> : <X/>
        }
        <Hamburger/>
      </div>
      <section className={styles.container}>
        {links}
      </section>
    </React.Fragment>
  );
};
