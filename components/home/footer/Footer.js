import React from 'react';
import Heading from './Heading.js';
import Info from './Info.js';
import CallToAction from '../callToAction/CallToAction.js';
import styles from './Footer.module.scss';
export default function Footer() {

  return (
    <footer className={styles.container}>
      <Heading/>
      <CallToAction text={"Get started"} path={"/"}/>
      <Info/>
    </footer>
  );
};
