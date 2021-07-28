import React from 'react';
import Image from 'next/image';
import AboutThis from './AboutThis.js';
import AboutUs from './AboutUs.js';
import bronxDots from '../../../static/bronx_dots.png';
import styles from './Content.module.scss';
export default function Content() {

  return (
    <section className={styles.container}>
      <AboutThis/>
      <AboutUs/>
      <Image src={bronxDots} alt={"Image of the Bronx Borough Footprint"}/>
    </section>
  );
};
