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

  return (
    <React.Fragment>
      <div
        className={styles.hamburger}
        onClick={toggleMobileMenu}>
        {
          !mobileMenuOpen ? <Hamburger/> : <X/>
        }
      </div>
      <section
        style={!isMobile ? {} : (isMobile && mobileMenuOpen ? {} : {display: 'none'})}
        className={styles.container}>
        <NavLink
          action={toggleMobileMenu} text={"Home"} path={"/"}/>
        <NavLink
          action={toggleMobileMenu} text={"Take the Survey"} path={"/budget-survey"}/>
        <NavLink
          action={toggleMobileMenu} text={"About the Project"} path={"/#about-this"}/>
        <NavLink
          action={toggleMobileMenu} text={"Who We Are"} path={"/#about-us"}/>
      </section>
    </React.Fragment>
  );
};
