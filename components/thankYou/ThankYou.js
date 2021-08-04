import React from 'react';
import Nav from '../nav/Nav.js';
import styles from './ThankYou.module.scss';
export default function Home() {

  return (
    <main className={styles.body}>
      <Nav/>
      <header className={styles.header}>
        <p>People&apos;s Vision for the Bronx</p>
        <strong>Participatory Budgeting Survey</strong>
      </header>
      <section className={styles.thanks}>
        <p>{"Thanks for your response!"}</p>
        <figcaption>{"We're tallying responses from residents across the Bronx. Check out the results so far:"}</figcaption>
      </section>
    </main>
  );
};
