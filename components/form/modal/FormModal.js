import React from 'react';
import Inputs from '../header/Inputs.js';
import styles from './FormModal.module.scss';

export default function FormModal({
    zipCode,
    districts,
    setDistrict,
    setZipCode,
    budgetFamiliarity,
    setBudgetFamiliarity
  }) {

  return (
    <React.Fragment>
      <div className={styles.modalBackground}/>
      <div className={styles.modalBody}>
        <header className={styles.header}>
          <strong>{"Welcome to the Survey"}</strong>
        </header>
        <section className={styles.introduction}>
          <p>{"We believe the people of the Bronx and New York City should have a more direct say in how the budget is created, so that it reflects the true needs and priorities of its residents."}</p>
        </section>
        <section className={styles.selection}>
          <Inputs
            zipCode={zipCode}
            districts={districts}
            setDistrict={setDistrict}
            setZipCode={setZipCode}
            budgetFamiliarity={budgetFamiliarity}
            setBudgetFamiliarity={setBudgetFamiliarity}/>
          <div className={styles.skip}>
            <strong>{"I live outside of the Bronx"}</strong>
            <p>{"We appreciate your interest in this project, feel free to try out the tool!"}</p>
            <button
              type={"button"}
              className={styles.buttonEnabled}>{"Start Survey"}</button>
          </div>
        </section>
      </div>
    </React.Fragment>
  );

};
