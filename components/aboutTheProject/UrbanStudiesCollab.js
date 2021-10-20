import React from 'react';
import BarnardUrbanStudiesLogo from '../../static/barnard_urban_studies_logo.svg';
import styles from './UrbanStudiesCollab.module.scss';
export default function UrbanStudiesCollab() {

  return (
    <section className={styles.container}>
      <div className={styles.logo}>
        <BarnardUrbanStudiesLogo/>
      </div>
      <div className={styles.content}>
        <h3>{"Barnard-Columbia Urban Studies Program"}</h3>
        <div className={styles.columns}>
          <p>{"The "} <a href="https://barnard.edu/profiles/mary-rocco" target="_blank" rel="noreferrer">{"Barnard + Columbia Urban Studies program"}</a>{" enables students to explore and understand the urban experience in all of its richness and complexity. It recognizes the city as an amalgam of diverse peoples and their social, political, economic, and cultural interactions within a distinctive built environment."}</p>
          <div className={styles.spacer}/>
          <p>{"Funding for this project was provided by a "}<a href="https://barnard.edu/barnard-engages" target="_blank" rel="noreferrer">{"Barnard Engages New York: Collaborative Partnerships to Promote Sustainable Change (or beNY for short)"}</a>{" award."}</p>
        </div>
      </div>
    </section>
  );
};
