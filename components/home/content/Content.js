import React from 'react';
import AboutThis from './AboutThis.js';
import AboutUs from './AboutUs.js';
import styles from './Content.module.scss';
export default function Content() {

  return (
    <React.Fragment>
      <AboutThis/>
      <AboutUs/>
    </React.Fragment>
  );
};
