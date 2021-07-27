import React from 'react';
import ResetButton from './ResetButton.js';
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
        <ResetButton
          setBudgetValues={setBudgetValues}
          createDefaultBudgetValues={createDefaultBudgetValues}/>
      </div>
      <div className={styles.buttonContainerRight}>
        <SnapButton
          budgetValues={budgetValues}
          setBudgetValues={setBudgetValues}
          allocatedTotal={allocatedTotal}/>
        <SubmitButton
          handleSubmit={handleSubmit}/>
    </div>
    </section>
  );
};
