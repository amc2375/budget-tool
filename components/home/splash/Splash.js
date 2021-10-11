import React from 'react';
import Headline from './Headline.js';
import SubHeadline from './SubHeadline.js';
import CallToAction from '../../callToAction/CallToAction.js';
import styles from './Splash.module.scss';
export default function Splash() {

  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <Headline/>
        <SubHeadline/>
        <CallToAction text={"Set the Budget"} path={"/budget-survey"} type={"button-splash"}/>
      </div>
    </section>
  );
};
