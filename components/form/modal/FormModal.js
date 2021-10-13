import React from 'react';
import Inputs from '../header/Inputs.js';
import styles from './FormModal.module.scss';

export default function FormModal({
    zipCode,
    districts,
    district,
    setDistrict,
    setZipCode,
    budgetFamiliarity,
    setBudgetFamiliarity
  }) {

  const handleSkip = (e) => {
    const background = document.getElementsByClassName(`${styles.modalBackground}`);
    const modal = document.getElementsByClassName(`${styles.modalBody}`);
    if (background[0]) background[0].remove();
    if (modal[0]) modal[0].remove();
  }

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
            district={district}
            setDistrict={setDistrict}
            setZipCode={setZipCode}
            budgetFamiliarity={budgetFamiliarity}
            setBudgetFamiliarity={setBudgetFamiliarity}
            modalBackgroundClass={`${styles.modalBackground}`}
            modalBodyClass={`${styles.modalBody}`}
            />
          <div className={styles.skip}>
            <strong>{"I live outside of the Bronx"}</strong>
            <p>{"We appreciate your interest in this project, feel free to try out the tool!"}</p>
            <button
              type={"button"}
              onClick={handleSkip}
              className={styles.buttonEnabled}>{"Start Survey"}</button>
          </div>
        </section>
      </div>
    </React.Fragment>
  );

};
