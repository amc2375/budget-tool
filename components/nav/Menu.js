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
      <div className={styles.mobileHeader}><p>{"Participatory Budgeting Survey"}</p></div>
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
          action={() => toggleMobileMenu(isMobile)} text={"HOME"} path={"/"}/>
        <NavLink
          action={() => toggleMobileMenu(isMobile)} text={"SET THE BUDGET"} path={"/budget-survey"}/>
        <NavLink
          action={() => toggleMobileMenu(isMobile)} text={"ABOUT THE PROJECT"} path={"/about"}/>
      </section>
    </React.Fragment>
  );
};
