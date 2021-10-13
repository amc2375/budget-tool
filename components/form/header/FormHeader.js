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
        <p>People&apos;s Vision for the Bronx</p>
        <strong>Participatory Budgeting Survey</strong>
      </header>
      <section className={styles.directions}>
        <ol>
          <li>Select your Council District and Enter Zipcode</li>
          <li>Allocate the budget according to where you think NYC should spend its budget</li>
          <li>Ensure that your allocation is at 100%</li>
          <li>Submit the form</li>
        </ol>
      </section>
      <Inputs
        zipCode={zipCode}
        districts={districts}
        setDistrict={setDistrict}
        setZipCode={setZipCode}
        budgetFamiliarity={budgetFamiliarity}
        setBudgetFamiliarity={setBudgetFamiliarity}/>
    </React.Fragment>
  );

};
