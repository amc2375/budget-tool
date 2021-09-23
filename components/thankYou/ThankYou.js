import React, { useEffect, useState } from 'react';
import Nav from '../nav/Nav.js';
import Image from 'next/image'
import chart1 from '../../static/chart1.png';
import chart2 from '../../static/chart2.png';
import chart3 from '../../static/chart3.png';
import Footer from '../footer/Footer.js';
import {
  constructChart
} from '../../utilities/charts.js';
import { useMediaQuery } from 'react-responsive';
import styles from './ThankYou.module.scss';



export default function ThankYou({ data }) {

  const height = 400;
  const width = 600;
  const margin = 60;

  const [isMobile, setIsMobile] = useState(
    false
  );

  const mobile = useMediaQuery({ query: '(max-width: 960px)' });

  useEffect(() => {
    setIsMobile(mobile);
    // store to local storage
    let localSubmission = JSON.parse(window.localStorage.getItem('peoplesBudgetSubmission'));
    constructChart(
      data.averages,
      data.categories,
      localSubmission,
      data.totalSubmissions,
      isMobile
    );
  }, [mobile, setIsMobile, isMobile, data.averages, data.totalSubmissions, data.categories])

  // style is added to #container div within charts.js - stylesheet is imported there.
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
      <div className={styles.layout} id="layout">
        <div id="container">
          <svg id="chart"/>
        </div>
      </div>
      <Footer />
    </main>
  );
};
