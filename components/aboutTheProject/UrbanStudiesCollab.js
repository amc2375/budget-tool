import React from 'react';
import styles from './UrbanStudiesCollab.module.scss';
export default function UrbanStudiesCollab() {

  return (
    <section className={styles.container}>
      <div className={styles.logo}>

      </div>
      <div className={styles.content}>
        <h3>{"Barnard-Columbia Urban Studies Program"}</h3>
        <div className={styles.columns}>
          <p>{"The Barnard + Columbia Urban Studies program enables students to explore and understand the urban experience in all of its richness and complexity. It recognizes the city as an amalgam of diverse peoples and their social, political, economic, and cultural interactions within a distinctive built environment."}</p>
          <p>{"Funding for this project was provided by a Barnard Engages New York: Collaborative Partnerships to Promote Sustainable Change (or beNY for short) award."}</p>
        </div>
      </div>
    </section>
  );
};
