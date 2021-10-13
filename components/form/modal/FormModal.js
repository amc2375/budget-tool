import React, { useState, useEffect } from 'react';
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

  const [continueButtonIsDisabled, setContinueButtonIsDisabled ] = useState(
    false
  );

  const [inputsAreHidden, setInputsAreHidden ] = useState(
    false
  );

  useEffect(() => {
    if (zipCode.length === 5 && budgetFamiliarity && district) {
      setContinueButtonIsDisabled(false);
    } else {
      setContinueButtonIsDisabled(true);
    }
  }, [zipCode, district, budgetFamiliarity])

  const handleContinue = (e) => {
    const background = document.getElementsByClassName(`${styles.modalBackground}`);
    const modal = document.getElementsByClassName(`${styles.modalBody}`);
    if (background[0]) background[0].remove();
    if (modal[0]) modal[0].remove();
  }

  const handleSkip = (e) => {
    setDistrict("0");
    setZipCode("00000");
    setBudgetFamiliarity("0");
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
        <section className={styles.selectionWrapper}>
          <div className={styles.selection}>
            <Inputs
              zipCode={zipCode}
              districts={districts}
              district={district}
              setDistrict={setDistrict}
              setZipCode={setZipCode}
              budgetFamiliarity={budgetFamiliarity}
              setBudgetFamiliarity={setBudgetFamiliarity}
              continueButtonIsDisabled={continueButtonIsDisabled}
              setContinueButtonIsDisabled={setContinueButtonIsDisabled}
              inputsAreHidden={inputsAreHidden}
              setInputsAreHidden={setInputsAreHidden}
              />
            <div className={!inputsAreHidden ? styles.hide : styles.skipMobile}>
              <strong>{"I live outside of the Bronx"}</strong>
              <p>{"We appreciate your interest in this project, feel free to try out the tool!"}</p>
            </div>
            <button
              type={"button"}
              onClick={handleContinue}
              disabled={continueButtonIsDisabled}
              className={continueButtonIsDisabled ? styles.buttonDisabled : styles.buttonEnabled}>{"Continue"}</button>
          </div>
          <div className={styles.skipDesktop}>
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
