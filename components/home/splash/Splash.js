import React from 'react';
import Headline from './Headline.js';
import SubHeadline from './SubHeadline.js';
import SplashImage from './SplashImage.js';
import CallToAction from '../../callToAction/CallToAction.js';
import styles from './Splash.module.scss';
export default function Splash() {

  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <Headline/>
        <SubHeadline/>
        <CallToAction text={"Get started"} path={"/budget-survey"} type={"button-splash"}/>
      </div>
      <div className={styles.right}>
        <SplashImage/>
      </div>
    </section>
  );
};
