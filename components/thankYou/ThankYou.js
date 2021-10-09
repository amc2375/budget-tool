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

  const [userSelectedData, setUserSelectedData] = useState(
    {
      "actuals": false,
      "localSubmission": true,
      "averages": true
    }
  )

  const handleDataSelection = (e) => {
    setUserSelectedData({
      ...userSelectedData,
      [e.target.name]: !userSelectedData[e.target.name]
    });
  }

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
      isMobile,
      userSelectedData
    );
  }, [mobile, setIsMobile, isMobile, data.averages, data.totalSubmissions, data.categories, userSelectedData])

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
        <header>{"People's Budget"}</header>
        <div className={styles.checkBoxes}>
          <input
            type="checkbox"
            className="checkbox"
            name={"actuals"}
            checked={userSelectedData["actuals"]}
            value={userSelectedData["actuals"]}
            onChange={(e) => handleDataSelection(e)}/><label>{"2020 NYC Budget"}</label>
          <input
            type="checkbox"
            className="checkbox"
            name={"localSubmission"}
            checked={userSelectedData["localSubmission"]}
            value={userSelectedData["localSubmission"]}
            onChange={(e) => handleDataSelection(e)}/>
          <label>{"Your Submission"}</label>
          <input
            type="checkbox"
            className="checkbox"
            name={"averages"}
            checked={userSelectedData["averages"]}
            value={userSelectedData["averages"]}
            onChange={(e) => handleDataSelection(e)}/>
          <label>{"Average of All Submissions"}</label>
        </div>
        <div id="container">
          <svg id="chart"/>
        </div>
      </div>
      <Footer />
    </main>
  );
};
