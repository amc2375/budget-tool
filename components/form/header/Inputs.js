import { useState } from 'react';
import React from 'react';
import CouncilDistrictInput from './CouncilDistrictInput.js';
import ZipCodeInput from './ZipCodeInput.js';
import BudgetFamiliarityInput from './BudgetFamiliarityInput.js';
import styles from './Inputs.module.scss';

export default function Inputs({
    zipCode,
    districts,
    district,
    setDistrict,
    setZipCode,
    budgetFamiliarity,
    setBudgetFamiliarity,
    continueButtonIsDisabled,
    setContinueButtonIsDisabled,
    inputsAreHidden,
    setInputsAreHidden
  }) {

  const handleIntermediarySkipMobileToggle = (e) => {
    setInputsAreHidden(!inputsAreHidden);
    setContinueButtonIsDisabled(!continueButtonIsDisabled);
    setDistrict('');
    setZipCode('');
    setBudgetFamiliarity('');
  }

  return (
    <React.Fragment>
      {
        !inputsAreHidden ? (
          <div
            onClick={handleIntermediarySkipMobileToggle}
            className={styles.skipMobile}>
            <p>Live outside the bronx?</p>
            <p>&#8594;</p>
          </div>
        ) : (
          <div
            onClick={handleIntermediarySkipMobileToggle}
            className={styles.skipMobile}>
            <p>&#8592; &nbsp;&nbsp;&nbsp;Back</p>
          </div>
        )
      }
      <section className={inputsAreHidden ? styles.hide : styles.container}>
        <strong>{"Bronx Residents"}</strong>
        <BudgetFamiliarityInput
          budgetFamiliarity={budgetFamiliarity}
          setBudgetFamiliarity={setBudgetFamiliarity}/>
        <CouncilDistrictInput
          districts={districts}
          setDistrict={setDistrict}/>
        <ZipCodeInput
          zipCode={zipCode}
          setZipCode={setZipCode}/>
      </section>
    </React.Fragment>
  );
};
