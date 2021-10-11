import React from 'react';
import Nav from '../nav/Nav.js';
import Vision from './Vision.js';
import CoalitionDetails from './CoalitionDetails.js';
import ValuesAndPrinciples from './ValuesAndPrinciples.js';
import UrbanStudiesCollab from './UrbanStudiesCollab.js';
import Footer from '../footer/Footer.js';
import styles from './AboutTheProject.module.scss';
export default function About() {

  return (
    <main className={styles.body}>
      <Nav/>
      <Vision/>
      <CoalitionDetails/>
      <ValuesAndPrinciples/>
      <UrbanStudiesCollab/>
      <Footer/>
    </main>
  );
};
