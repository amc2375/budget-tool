import React from 'react';
import Nav from '../nav/Nav.js';
import Splash from './splash/Splash.js';
import Banner from './banner/Banner.js';
import Seal from './seal/Seal.js';
import Content from './content/Content.js';
import Footer from '../footer/Footer.js';
import styles from './Home.module.scss';
export default function Home() {

  return (
    <main className={styles.body}>
      <Nav/>
      <Splash/>
      <Banner/>
      <Seal/>
      <Content/>
      <Footer/>
    </main>
  );
};
