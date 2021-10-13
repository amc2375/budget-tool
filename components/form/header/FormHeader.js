import React from 'react';
import Inputs from './Inputs.js';
import styles from './FormHeader.module.scss';

export default function FormHeader({
    zipCode,
    districts,
    setDistrict,
    setZipCode,
    budgetFamiliarity,
    setBudgetFamiliarity
  }) {

  return (
    <React.Fragment>
      <header className={styles.header}>
        <p>{"Bronx-wide Coalition"}</p>
        <strong>{"Bronx People's Budget Survey"}</strong>
      </header>
      <section className={styles.directions}>
        <ol>
          <li>Change the budget according to your needs and priorities</li>
          <li>Ensure that your allocation is at 100%</li>
          <li>Submit the form</li>
        </ol>
      </section>
    </React.Fragment>
  );

};
