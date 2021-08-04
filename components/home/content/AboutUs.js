import React from 'react';
import Image from 'next/image';
import bcdiLogoColor from '../../../static/bcdi_logo_color.png';
import BarnardUrbanStudiesLogo from '../../../static/barnard_urban_studies_logo.svg';
import styles from './AboutUs.module.scss';
export default function AboutUs() {

  return (
    <article className={styles.container} id={"about-us"}>
      <div className={styles.left}>
        <h1>{"Who we are"}</h1>
      </div>
      <div className={styles.middle}>
        <Image src={bcdiLogoColor} alt={"Bronx Cooperative Development Initiative logo"}/>
        <p>{"The Bronx Cooperative Development Initiative (BCDI) is a community-led effort to build an equitable, sustainable, and democratic local economy that creates wealth and ownership for low-income people of color—what we call economic democracy."}</p>
      </div>
      <div className={styles.right}>
        <BarnardUrbanStudiesLogo/>
        <p>{"The Barnard–Columbia Urban Studies program enables students to explore and understand the urban experience in all of its richness and complexity.  It recognizes the city as an amalgam of diverse peoples and their social, political, economic, and cultural interactions within a distinctive built environment."}</p>
      </div>
    </article>
  );
};
