import React from 'react';
import Nav from '../nav/Nav.js';
import Image from 'next/image'
import chart1 from '../../static/chart1.png';
import chart2 from '../../static/chart2.png';
import chart3 from '../../static/chart3.png';
import Footer from '../footer/Footer.js';
import styles from './ThankYou.module.scss';

export default function ThankYou({ data }) {
  console.log(data);
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
      <section className={styles.charts}>
        <div className={styles.chartChild}>
          <Image src={chart1}/>
        </div>
        <div className={styles.chartChild}>
          <Image src={chart2}/>
        </div>
        <div className={styles.chartChild}>
          <Image src={chart3}/>
        </div>
      </section>
      <Footer />
    </main>
  );
};
