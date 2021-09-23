import React from 'react';
import {
  billionsAmountString,
  overUnderBudgetText
} from '../../../utilities/helpers.js';
import SubmitButton from './SubmitButton.js';
import ResetLink from './ResetLink.js';
import styles from './Total.module.scss';

export default function Total({
    district,
    zipCode,
    totalBudget,
    budgetValues,
    setBudgetValues,
    allocatedTotal,
    createDefaultBudgetValues,
    handleSubmit
  }) {

  let totalAmount = (parseFloat(allocatedTotal)/100) * totalBudget;

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.left}/>
        <div className={styles.right}>
          <div className={styles.row}>
            <div className={styles.total}>
              <p>{`${(allocatedTotal).toFixed(1)}%`}</p>
              <figcaption>{`${billionsAmountString(totalAmount)}`}</figcaption>
            </div>
            <div className={styles.overUnder}>
              <p>{overUnderBudgetText(allocatedTotal)}</p>
            </div>
          </div>
          <div className={styles.divider}/>
          <div className={styles.row}>
            <p className={styles.caption}>{"Your Allocation"}</p>
            <p className={styles.caption}>{allocatedTotal < 100 ? "Increase" : "Decrease"} your spending by this amount</p>
          </div>
          <div className={styles.row}>
            <div/>
            <SubmitButton
              district={district}
              zipCode={zipCode}
              handleSubmit={handleSubmit}
              allocatedTotal={allocatedTotal}/>
          </div>
        </div>
      </div>
      <div className={styles.mobileContainer}>
        <SubmitButton
          district={district}
          zipCode={zipCode}
          handleSubmit={handleSubmit}
          allocatedTotal={allocatedTotal}/>
        <p>{overUnderBudgetText(allocatedTotal)}</p>
        <ResetLink
          setBudgetValues={setBudgetValues}
          createDefaultBudgetValues={createDefaultBudgetValues}/>
      </div>
    </React.Fragment>
  );
};
