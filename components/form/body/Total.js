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
    budgetFamiliarity,
    totalBudget,
    budgetValues,
    setBudgetValues,
    allocatedTotal,
    createDefaultBudgetValues,
    handleSubmit
  }) {

  let totalAmount = (parseFloat(allocatedTotal)/100) * totalBudget;

  const warningText = (allocatedTotal) => {
    return allocatedTotal.toFixed(1) != 100.00 ? overUnderBudgetText(allocatedTotal) : "";
  }

  const warningTextCaption = (allocatedTotal) => {
    return allocatedTotal.toFixed(1) != 100.00 ? `${allocatedTotal < 100 ? "Increase" : "Decrease"} spending` : "";
  }

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.left}>
          <span>{"*Approximately $26 billion of the ~$99 billion budget is not adjustable. This includes debt service payments, pension and benefits for city workers, and a miscellaneous budget line. These categories have been omitted from the form."}</span>
        </div>
        <div className={styles.right}>
          <div className={styles.row}>
            <div className={styles.total}>
              <p>{`${(allocatedTotal).toFixed(1)}%`}</p>
              <figcaption>{`${billionsAmountString(totalAmount)}`}</figcaption>
            </div>
            <div className={styles.overUnder}>
              <p>{warningText(allocatedTotal)}</p>
            </div>
          </div>
          <div className={styles.divider}/>
          <div className={styles.row}>
            <p className={styles.caption}>{"Your Allocation"}</p>
            <p className={styles.caption}>{warningTextCaption(allocatedTotal)}</p>
          </div>
          <div className={styles.row}>
            <div/>
            <SubmitButton
              budgetFamiliarity={budgetFamiliarity}
              district={district}
              zipCode={zipCode}
              handleSubmit={handleSubmit}
              allocatedTotal={allocatedTotal}/>
          </div>
        </div>
      </div>
      <div className={styles.mobileContainer}>
        <SubmitButton
          budgetFamiliarity={budgetFamiliarity}
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
