import React from 'react';
import Heading from './Heading.js';
import Info from './Info.js';
import styles from './Footer.module.scss';
export default function Footer() {

  return (
    <footer className={styles.container}>
      <Heading/>
      <Info/>
    </footer>
  );
};
