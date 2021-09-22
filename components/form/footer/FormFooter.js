import React from 'react';
import SnapButton from './SnapButton.js';
import SubmitButton from './SubmitButton.js';
import styles from './FormFooter.module.scss';

export default function FormFooter({
    allocatedTotal,
    budgetValues,
    setBudgetValues,
    handleSubmit,
    createDefaultBudgetValues
  }) {

  return (
    <section className={styles.container}>
      <div className={styles.buttonContainerLeft}>

      </div>
      <div className={styles.buttonContainerRight}>
        <SnapButton
          budgetValues={budgetValues}
          setBudgetValues={setBudgetValues}
          allocatedTotal={allocatedTotal}/>
        <SubmitButton
          handleSubmit={handleSubmit} allocatedTotal={allocatedTotal}/>
      </div>
    </section>
  );
};
