import React, { useState, useEffect } from 'react';
import NavLink from './NavLink.js';
import styles from './Menu.module.scss';
import { useMediaQuery } from 'react-responsive';
import Hamburger from '../../static/hamburger.svg';
import X from '../../static/x.svg';
export default function Menu() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(
    false
  );

  const [isMobile, setIsMobile] = useState(
    false
  );

  const mobile = useMediaQuery({ query: '(max-width: 960px)' });

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile, isMobile]);

  const toggleMobileMenu = (isMobile) => {
    if (isMobile) setMobileMenuOpen(!mobileMenuOpen);
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
        style={!isMobile || mobileMenuOpen ? {} : {display: 'none'}}
        className={styles.container}>
        <NavLink
          action={() => toggleMobileMenu(isMobile)} text={"Home"} path={"/"}/>
        <NavLink
          action={() => toggleMobileMenu(isMobile)} text={"Take the Survey"} path={"/budget-survey"}/>
        <NavLink
          action={() => toggleMobileMenu(isMobile)} text={"About the Project"} path={"/#about-this"}/>
        <NavLink
          action={() => toggleMobileMenu(isMobile)} text={"Who We Are"} path={"/#about-us"}/>
      </section>
    </React.Fragment>
  );
};
