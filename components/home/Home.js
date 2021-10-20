import React from 'react';
import Nav from '../nav/Nav.js';
import BannerTop from './bannerTop/BannerTop.js';
import SplashImage from './splash/SplashImage.js';
import BannerBottom from './bannerBottom/BannerBottom.js';
import Seal from './seal/Seal.js';
import Content from './content/Content.js';
import Footer from '../footer/Footer.js';
import styles from './Home.module.scss';
export default function Home() {

  return (
    <main className={styles.body}>
      <Nav/>
      <BannerTop/>
      <BannerBottom/>
      <SplashImage/>
      <Content/>
      <Footer/>
    </main>
  );
};
