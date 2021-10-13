import React from 'react';
import Image from 'next/image';
import CallToAction from '../../callToAction/CallToAction.js';
import styles from './Secondary.module.scss';
export default function Secondary() {

  return (
    <article className={styles.container} id={"about-us"}>
      <div className={styles.left}>
        <h1>{"How to Stay Involved"}</h1>
        <p>{"Thank you for filling out the Bronx People’s Budget Survey! Our borough-wide planning process is ongoing and we need your ideas and solutions to help shape the future of the Bronx!"}</p>
        <p>{"To get involved in our planning process and connect to one of our member organizations in your neighborhood, fill out this form."}</p>
        <a>Fill out Google Form</a>
        <p>{"To learn about upcoming events and other resources:"}</p>
        <a>Visit our Linktree</a>
      </div>
      <div className={styles.right}>
        <h1>{"Set the Budget"}</h1>
        <h3>{"Take the Bronx People’s Budget Survey from the Bronx-wide Coalition"}</h3>
        <CallToAction
          text={"Take the Survey"}
          path={"/budget-survey"}
          type={"button-splash"}/>
      </div>
    </article>
  );
};
